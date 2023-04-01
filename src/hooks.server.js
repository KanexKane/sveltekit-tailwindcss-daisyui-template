export async function handle({ event, resolve }) {
	// อยากให้ส่วนของ Server ทำอะไรในทุกๆ ครั้งที่เพจมีการเรียกใช้งาน +page.server.js
	return await resolve(event);
}
