import { HttpInterceptorFn } from '@angular/common/http';

export const imdbInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authToken = "3f26fc796cmsh3b57359236df64bp113c47jsn93fe65321a8f"
//  const authToken = "4746a79472mshb4e32011cd91405p1d5108jsn8eddc658a3e7";
  
  const newReq = req.clone({
    setHeaders: {
      'X-RapidAPI-Key': authToken,
    }
  });
  return next(newReq);

};