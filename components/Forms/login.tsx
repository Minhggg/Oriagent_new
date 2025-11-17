// app/sign-in/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
  return (
    // Container bao bọc, căn giữa form trên toàn bộ màn hình
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Đăng Nhập</CardTitle>
          <CardDescription className="text-center">
            Sử dụng email và mật khẩu của bạn để truy cập.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Mật khẩu</Label>
              <Link href="#" className="text-sm font-medium text-black hover:underline">
                Quên mật khẩu?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
        </CardContent>

        <CardFooter className="flex-col">
          <Button className="w-full bg-black hover:bg-gray-800">Đăng Nhập</Button>
          <div className="mt-4 text-center text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <Link href="/sign-up" className="text-black font-semibold hover:underline">
              Đăng ký
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}