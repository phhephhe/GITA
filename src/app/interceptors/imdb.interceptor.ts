import { HttpInterceptorFn } from '@angular/common/http';


export const imdbInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authToken = "3f26fc796cmsh3b57359236df64bp113c47jsn93fe65321a8f"

  const newReq = req.clone({
    setHeaders: {
      'X-RapidAPI-Key': authToken,
    }
  });
  return next(newReq);

};