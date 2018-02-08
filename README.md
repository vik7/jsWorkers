## Web Workers

* Workers are the in-browser thread that can be used to execute javascript code without blocking the UI.
  This will help developer to write code which do heavy computation and will not block the UI at all.
  
  * But you will say that Javascript is single thread language but we should know that
  javascript is just a language it does not define the thread-model and web workers are not
  javascript thing its the browser-api which can be accessed by Javascript.
  
* There are basically three types defined
    * Dedicated workers
    * Shared workers
    * Service workers
    
#### Dedicated worker
    Dedicated worker is instantiated by main process and can be only comunicated with it
    
#### Shared Workers
    Shared workers can be reached by all the processes running on the same origin like different tabs, iframes or other shared workers.
    
#### Service workers
    Service worker is event-driven worker registered with origin and tha path.
    It has the capability to control/manage the webpage/site assosiated with it,
    by intercepting and modifying resource and navigation requests and caching resources
    in very controlled and granular fashion which you can drive your app how they behave in certain
    envirnment like when network is not available. 
    