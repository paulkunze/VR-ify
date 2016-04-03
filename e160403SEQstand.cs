using UnityEngine;
using System.Collections;

public class e160403SEQstand : MonoBehaviour 
{

	public GameObject main;
	public GameObject can11;
	public GameObject can22;

	int btnNext;

	void Start ()
	{
	}
	
	void Update () 
	{

		btnNext = main.GetComponent<e160403SEQbtnnxt>().btntxti;
		// int test = main.GetComponent<e160403SEQmain>().productNumber;
		print(btnNext);
		print("hello");

		if(btnNext==0)
		{
			print("0");
			can11.active = true;	
			can22.active = false;	

		}
		if(btnNext==1)
		{
			print("1");

			can11.active = false;	
			can22.active = true;
		}
	}
}
