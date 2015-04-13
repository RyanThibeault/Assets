#pragma strict




function Update () {
	Camera.main.transform.position += Camera.main.transform.forward * Time.deltaTime;
	transform.Rotate(0, 0, Time.deltaTime * 10);
	}
	
