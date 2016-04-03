using UnityEngine;
using System.Collections;

public class e160402SEQnoBounce : MonoBehaviour 
{
	public GameObject obj;

    void FixedUpdate()
    {
    	float x = transform.position.x;
    	float y = transform.position.y;
	    float z = obj.transform.position.z;

	    transform.position = new Vector3 (x, y, z);

    }
}