﻿//---t e160403SEQbtn-------------------------
using UnityEngine;
using System.Collections;
public class e160403SEQbtn1 : MonoBehaviour 
{
//---t mem-----------------------------------
 e160403SEQmain main;
//---s brt-----------------------------------
	void Start () 
	{
		main = GetComponent<e160403SEQmain>();
	}
	
	void Update () 
	{
	
	}

	void OnCollisionEnter()
	{
		print("btn1");
		transform.localScale 
		 = new Vector3(1.6f,1.6f,0.2f);
		main.btn1 = true;			
	}

	void OnCollisionExit()
	{
		transform.localScale 
 		 = new Vector3(2,2,0.2f);
	}
}
