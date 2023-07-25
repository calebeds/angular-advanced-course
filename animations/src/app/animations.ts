import { animation, style, animate } from "@angular/animations";

export const fadeIn = animation([
  style({ opacity: 0 }),
  animate("500ms", style({ opacity: 1 })),
]);

export const fadeOut = animation(animate("500ms", style({ opacity: 0 })));
