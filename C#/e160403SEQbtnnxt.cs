//---t e160403SEQbtn-------------------------
using UnityEngine;
using System.Collections;
public class e160403SEQbtnnxt : MonoBehaviour 
{
//---t mem-----------------------------------
 public int btntxti;
//---s brt-----------------------------------
	void Start () 
	{
		// main = obj.GetComponent<e160403SEQmain>();
	}
	
	void Update () 
	{
	}

	void OnCollisionEnter()
	{
		// print("touched btnnxt");
		transform.localScale 
		 = new Vector3(1.6f,1.6f,0.2f);
		

				print(btntxti);

		 btntxti++;
		 if(btntxti==2)
		 {
		 	btntxti=0;
		 }


	}

	void OnCollisionExit()
	{
		transform.localScale 
 		 = new Vector3(2,2,0.2f);
	}
}
