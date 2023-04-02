# Starter template SvelteKit + TailwindCSS + daisyUI

โปรเจกต์นี้จะมีการติดตั้ง TailwindCSS และ daisyUI ไว้แล้ว แล้วทำ Navbar กับ Drawer ไว้ให้ด้วย

## เริ่มใช้งาน

```
npm install
npm run dev
```


## เปลี่ยนธีม

ตอนเริ่มต้นจะตั้งธีมไว้ที่ cupcake สามารถไปเปลี่ยนได้ที่ไฟล์ src/app.html ตรง data-theme

## เปลี่ยนชื่อ Session

ไปเปลียนได้ที่ src/lib/config ตัวแปร authSessionName

## อยากให้หน้าไหนมีการรันจาก server

ต้องสร้างไฟล์ .server.js ด้วย เช่น +page.svelte แล้วก็ต้องมี +page.server.js