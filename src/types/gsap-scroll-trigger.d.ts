declare module 'gsap/dist/ScrollTrigger' {
  export class ScrollTrigger {
    static getAll(): ScrollTrigger[];
    static refresh(): void;
    kill(): void;
  }
}
