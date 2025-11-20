"use client"

import {
  createContext,
  forwardRef,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

import { debounce } from "lodash-es"
import Matter from "matter-js"
import { cn } from "@/lib/utils"
import SVGPathCommander from "svg-path-commander"

// =============================
// Helper Functions
// =============================
function parsePathToVertices(path: string, sampleLength = 15) {
  const commander = new SVGPathCommander(path)
  const points: { x: number; y: number }[] = []
  const totalLength = commander.getTotalLength()
  let pos = 0
  let last = null as any

  while (pos < totalLength) {
    const p = commander.getPointAtLength(pos)
    if (!last || p.x !== last.x || p.y !== last.y) {
      points.push({ x: p.x, y: p.y })
      last = p
    }
    pos += sampleLength
  }
  const end = commander.getPointAtLength(totalLength)
  if (last && (end.x !== last.x || end.y !== last.y)) {
    points.push(end)
  }
  return points
}

function calculatePosition(
  value: number | string | undefined,
  container: number,
  size: number
) {
  if (typeof value === "string" && value.endsWith("%")) {
    return (parseFloat(value) / 100) * container
  }
  return typeof value === "number" ? value : size - container + size / 2
}

// =============================
// Types
// =============================
type GravityProps = {
  children: ReactNode
  debug?: boolean
  gravity?: { x: number; y: number }
  resetOnResize?: boolean
  grabCursor?: boolean
  addTopWall?: boolean
  autoStart?: boolean
  className?: string
}

type MatterBodyProps = {
  children: ReactNode
  matterBodyOptions?: Matter.IBodyDefinition
  isDraggable?: boolean
  bodyType?: "rectangle" | "circle" | "svg"
  sampleLength?: number
  x?: number | string
  y?: number | string
  angle?: number
  className?: string
}

type PhysicsBody = {
  element: HTMLElement
  body: Matter.Body
  props: MatterBodyProps
}

export type GravityRef = {
  start: () => void
  stop: () => void
  reset: () => void
}

// =============================
// Context
// =============================
const GravityContext = createContext<{
  registerElement: (id: string, el: HTMLElement, props: MatterBodyProps) => void
  unregisterElement: (id: string) => void
} | null>(null)

// =============================
// MatterBody Component
// =============================
export const MatterBody = ({
  children,
  className,
  matterBodyOptions = {
    friction: 0.1,
    restitution: 0.1,
    density: 0.001,
    isStatic: false,
  },
  bodyType = "rectangle",
  isDraggable = true,
  sampleLength = 15,
  x = 0,
  y = 0,
  angle = 0,
  ...props
}: MatterBodyProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const id = useRef(Math.random().toString(36).slice(2))
  const ctx = useContext(GravityContext)

  useEffect(() => {
    if (!ref.current || !ctx) return

    ctx.registerElement(id.current, ref.current, {
      children,
      matterBodyOptions,
      bodyType,
      sampleLength,
      isDraggable,
      x,
      y,
      angle,
      ...props,
    })

    return () => ctx.unregisterElement(id.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    JSON.stringify(matterBodyOptions),
    bodyType,
    isDraggable,
    x, 
    y, 
    angle,
    sampleLength
  ])

  return (
    <div
      ref={ref}
      className={cn(
        "absolute",
        className,
        isDraggable && "pointer-events-none"
      )}
    >
      {children}
    </div>
  )
}

// =============================
// Gravity Component
// =============================
export const Gravity = forwardRef<GravityRef, GravityProps>(
  (
    {
      children,
      debug = false,
      gravity = { x: 0, y: 1 },
      grabCursor = true,
      resetOnResize = true,
      addTopWall = true,
      autoStart = true,
      className,
      ...props
    },
    ref
  ) => {
    const canvas = useRef<HTMLDivElement>(null)
    
    // FIX 1: Thêm {} vào create() để tránh lỗi "Expected 1 arguments"
    const engine = useRef(Matter.Engine.create({}))
    const render = useRef<Matter.Render | null>(null)
    const runner = useRef<Matter.Runner | null>(null)
    const bodies = useRef(new Map<string, PhysicsBody>())
    const frame = useRef<number>()
    const mouseConstraint = useRef<Matter.MouseConstraint>()
    const walls = useRef<Matter.Body[]>([])

    const isRunning = useRef(false)

    // ========== Register & Unregister ==========
    const registerElement = useCallback(
      (id: string, el: HTMLElement, props: MatterBodyProps) => {
        if (!canvas.current) return

        const width = canvas.current.offsetWidth
        const height = canvas.current.offsetHeight

        const W = el.offsetWidth
        const H = el.offsetHeight

        const X = calculatePosition(props.x, width, W)
        const Y = calculatePosition(props.y, height, H)
        const A = (props.angle || 0) * (Math.PI / 180)

        let body: Matter.Body

        // FIX 2: Cast options sang `any` để tránh lỗi Type 'null' is not assignable to 'undefined'
        // Nguyên nhân: TS strict check null khác undefined, nhưng MatterJS types lại khắt khe.
        const commonOptions = {
            ...(props.matterBodyOptions as any), 
            angle: A,
            render: debug
              ? { fillStyle: "#666", strokeStyle: "#111", lineWidth: 3 }
              : { fillStyle: "transparent" },
        }

        if (props.bodyType === "circle") {
          body = Matter.Bodies.circle(
            X,
            Y,
            Math.max(W, H) / 2,
            commonOptions
          )
        } else if (props.bodyType === "svg") {
          const paths = el.querySelectorAll("path")
          const vert: Matter.Vector[][] = []
          paths.forEach((p) =>
            vert.push(
              parsePathToVertices(p.getAttribute("d")!, props.sampleLength)
            )
          )
          body = Matter.Bodies.fromVertices(X, Y, vert, commonOptions)
        } else {
          body = Matter.Bodies.rectangle(X, Y, W, H, commonOptions)
        }
        
        if(body) {
            Matter.World.add(engine.current.world, body)
            bodies.current.set(id, { element: el, body, props })
        }
      },
      [debug]
    )

    const unregisterElement = useCallback((id: string) => {
      const item = bodies.current.get(id)
      if (item) {
        Matter.World.remove(engine.current.world, item.body)
        bodies.current.delete(id)
      }
    }, [])

    // ========== Update DOM Loop ==========
    const update = useCallback(() => {
      bodies.current.forEach(({ element, body }) => {
        const { x, y } = body.position
        const rotation = body.angle
        
        element.style.transform = `translate3d(${x - element.offsetWidth / 2}px, ${
            y - element.offsetHeight / 2
        }px, 0) rotate(${rotation}rad)`
      })

      frame.current = requestAnimationFrame(update)
    }, [])

    // ========== Setup Walls ==========
    const setupWalls = useCallback((width: number, height: number) => {
        if(walls.current.length > 0) {
            Matter.World.remove(engine.current.world, walls.current)
            walls.current = []
        }

        const wallOptions = { isStatic: true, render: { visible: debug } }
        const thickness = 50 

        const floor = Matter.Bodies.rectangle(width / 2, height + thickness/2, width, thickness, wallOptions)
        const leftWall = Matter.Bodies.rectangle(-thickness/2, height / 2, thickness, height * 2, wallOptions)
        const rightWall = Matter.Bodies.rectangle(width + thickness/2, height / 2, thickness, height * 2, wallOptions)
        
        const newWalls = [floor, leftWall, rightWall]

        if (addTopWall) {
            const ceil = Matter.Bodies.rectangle(width / 2, -thickness*2, width, thickness, wallOptions)
            newWalls.push(ceil)
        }

        walls.current = newWalls
        Matter.World.add(engine.current.world, newWalls)
    }, [addTopWall, debug])


    // ========== Initialize ==========
    const init = useCallback(() => {
      if (!canvas.current) return

      // Poly-decomp
      if (typeof window !== "undefined" && !(window as any).decomp) {
        try {
          const decomp = require("poly-decomp")
          Matter.Common.setDecomp(decomp)
          ;(window as any).decomp = decomp
        } catch (e) {
          console.warn("Poly-decomp not found")
        }
      }

      const width = canvas.current.offsetWidth
      const height = canvas.current.offsetHeight

      engine.current.gravity.x = gravity.x
      engine.current.gravity.y = gravity.y

      render.current = Matter.Render.create({
        element: canvas.current,
        engine: engine.current,
        options: {
          width,
          height,
          background: "transparent",
          wireframes: false,
          showAngleIndicator: debug,
        },
      })

      if (grabCursor) {
          const mouse = Matter.Mouse.create(render.current.canvas)
          mouseConstraint.current = Matter.MouseConstraint.create(engine.current, {
            mouse,
            constraint: { stiffness: 0.2, render: { visible: debug } },
          })
          Matter.World.add(engine.current.world, mouseConstraint.current)
      }

      setupWalls(width, height)

      // FIX 1: Thêm {} vào create()
      runner.current = Matter.Runner.create({})
      
      Matter.Render.run(render.current)
      update()
      
      if (autoStart) {
        Matter.Runner.run(runner.current, engine.current)
        isRunning.current = true
      }

    }, [debug, gravity, grabCursor, autoStart, setupWalls, update])


    // ========== Resize Handler ==========
    const handleResize = useCallback(() => {
        if (!canvas.current || !render.current) return
        
        const newW = canvas.current.offsetWidth
        const newH = canvas.current.offsetHeight

        render.current.bounds.max.x = newW
        render.current.bounds.max.y = newH
        render.current.options.width = newW
        render.current.options.height = newH
        render.current.canvas.width = newW
        render.current.canvas.height = newH

        setupWalls(newW, newH)
        
        Matter.Composite.allBodies(engine.current.world).forEach(b => {
            if(!b.isStatic && b.position.y > newH) {
                Matter.Body.setPosition(b, { x: b.position.x, y: newH - 50})
            }
        })

    }, [setupWalls])

    useEffect(() => {
      init()
      return () => {
        if (frame.current) cancelAnimationFrame(frame.current)
        if (render.current) {
            Matter.Render.stop(render.current)
            render.current.canvas.remove()
        }
        if (runner.current) Matter.Runner.stop(runner.current)
        if (engine.current) Matter.Engine.clear(engine.current)
      }
    }, [init])

    useEffect(() => {
      if (!resetOnResize) return
      const handler = debounce(handleResize, 500)
      window.addEventListener("resize", handler)
      return () => {
        window.removeEventListener("resize", handler)
        handler.cancel()
      }
    }, [resetOnResize, handleResize])


    useImperativeHandle(ref, () => ({
        start: () => {
            if (runner.current && !isRunning.current) {
                Matter.Runner.run(runner.current, engine.current)
                isRunning.current = true
            }
        },
        stop: () => {
            if (runner.current && isRunning.current) {
                Matter.Runner.stop(runner.current)
                isRunning.current = false
            }
        },
        reset: () => {
            if (runner.current) Matter.Runner.stop(runner.current)
            bodies.current.forEach(({ element, body, props }) => {
                if(!canvas.current) return
                const W = canvas.current.offsetWidth
                const H = canvas.current.offsetHeight
                const X = calculatePosition(props.x, W, element.offsetWidth)
                const Y = calculatePosition(props.y, H, element.offsetHeight)
                const A = (props.angle || 0) * (Math.PI / 180)
                
                Matter.Body.setPosition(body, { x: X, y: Y })
                Matter.Body.setAngle(body, A)
                Matter.Body.setVelocity(body, { x: 0, y: 0 })
                Matter.Body.setAngularVelocity(body, 0)
            })
            setTimeout(() => {
                 if(autoStart && runner.current) {
                     Matter.Runner.run(runner.current, engine.current)
                 }
            }, 100)
        }
    }))

    return (
      <GravityContext.Provider value={{ registerElement, unregisterElement }}>
        <div ref={canvas} className={cn("absolute inset-0 w-full h-full select-none", className)} {...props}>
          {children}
        </div>
      </GravityContext.Provider>
    )
  }
)

Gravity.displayName = "Gravity"