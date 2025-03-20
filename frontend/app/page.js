// app/page.js (หน้าแรก)
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect ไปที่หน้า /login ทันทีที่โหลดหน้าแรก
  redirect("/login");

  return null; // ไม่แสดงอะไรในหน้าแรก
}
