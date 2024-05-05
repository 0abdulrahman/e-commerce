import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggler } from "@/components/ModeToggler";
import Image from "next/image";
import Link from "next/link";
import { Search } from "@/components/ui/search";
import { ChevronDown, CreditCard, LogOut, Settings, Settings2, ShoppingCart, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColorSelector } from "@/components/ColorSelector";

const cairo = Cairo({ subsets: ["arabic"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, auth }: Readonly<{ children: React.ReactNode; auth: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <div className="bg-background border-b">
              <ul className="container flex justify-between gap-4 items-center py-8 ">
                <li>
                  <Link href="/" className="flex items-center gap-1 font-bold text-lg uppercase">
                    <Image src="/assets/Zeronet_logo.png" alt="E-Commerce" width="60" height="60" priority />
                    متجري
                  </Link>
                </li>
                <li>
                  <Search placeholder="ابحث عن منتج ما..." />
                </li>
                <li>
                  <ul className="flex">
                    <li className="font-semibold h-14 pe-6 border-e flex items-center justify-center">English</li>
                    <li className="flex items-center h-14 px-6 border-e justify-center flex-col">
                      <span className="text-sm text-muted-foreground">مرحبًا يا عبدالرحمن،</span>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="flex gap-1 items-center mt-1 px-2 focus">
                            تفاصيل حسابك <ChevronDown className="w-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <Link href="/profile" className="flex rtl:flex-row-reverse gap-2 items-center w-full">
                                <User className="h-4 w-4" />
                                <span>الملف الشخصي</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="/profile" className="flex rtl:flex-row-reverse gap-2 items-center w-full">
                                <CreditCard className="h-4 w-4" />
                                <span>عمليات الدفع</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="/profile" className="flex rtl:flex-row-reverse gap-2 items-center w-full">
                                <Settings className="h-4 w-4" />
                                <span>الإعدادات</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="/dashboard" className="flex rtl:flex-row-reverse gap-2 items-center w-full">
                                <Settings2 className="h-4 w-4" />
                                <span>لوحة التحكم</span>
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <button className="flex rtl:flex-row-reverse gap-2 items-center w-full">
                              <LogOut className="h-4 w-4" />
                              <span>تسجيل الخروج</span>
                            </button>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                    <li className="font-semibold h-14 px-6 border-e flex items-center justify-center">
                      <Link href="/cart" className="relative">
                        <span className="absolute top-1 right-0 translate-x-1/2 -translate-y-1/2 min-h-3 min-w-3 aspect-square p-1 bg-primary text-white text-xs rounded-full flex justify-center items-center">
                          77
                        </span>
                        <ShoppingCart />
                      </Link>
                    </li>
                    <li className="font-semibold h-14 ps-6 flex gap-2 items-center justify-center">
                      <ColorSelector />
                      <ModeToggler />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bg-background border-b">
              <Navbar />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
