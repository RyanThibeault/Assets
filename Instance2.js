 #pragma strict
 
 var original : GameObject;
     
 function Awake()
 {
     var clone = Instantiate (original, transform.position, Quaternion.identity);
     Destroy (clone, 1.0);
 }
 