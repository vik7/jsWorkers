##Message passing

* Copying message
    * Message is serialized, copied, sent over and then de-serialize at other end.
    The page and worker does not share the same instance to there will be duplicate
    of end result on each pass.
    * Most browsers have implemented this by automatically JSON encoding and
    decoding at either end.
    * This way bigger the message, longer it will take time to sent.
    
* Transferring message
    * Message is transferred in form of Array Buffer