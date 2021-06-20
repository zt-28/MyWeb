window.onload =function(){
		document.getElementById("btn").onclick =function(){
		var selectVal= document.getElementById("role");
		// alert(selectVal.value);	
			
		//在div 中显示图片
			var showDiv = document.getElementById("left");	//显示图片
			var description =document.getElementById("right");	//显示角色描述
			//获得下拉列表索引
			var index =selectVal.selectedIndex;
			//按照索引获得值val
			var name =selectVal.options[index].text;
			//使用innerHTML html标签起作用
			 if(name=='江户川 柯南'){
				showDiv.innerHTML="<img  src='./Image/KeNan.jpg' title='江户川 柯南' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>江户川柯南，日本漫画《名侦探柯南》及其衍生作品中的男主角。真实身份是高中生侦探工藤新一，人称“平成年代的福尔摩斯”“日本警察的救世主”。因试图跟踪黑衣组织成员被偷袭，并被灌下代号“APTX4869”的毒药，虽然幸免于死，但身体缩小成一年级小学生的模样。之后寻求阿笠博士的帮助，在被青梅竹马毛利兰询问自己名字时，化名为江户川柯南。在阿笠博士的提议下，寄住于小兰的父亲毛利小五郎家中，解决各种案件的同时秘密调查黑衣组织。</ol> </li></font>";
			}else if(name=='毛利 小五郎'){
				showDiv.innerHTML="<img  src='./Image/MaoliXwl.jpg' title='毛利 小五郎' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>毛利小五郎是日本漫画《名侦探柯南》及其衍生作品中的角色。毛利兰的父亲，与妻子妃英理在十年前就已分居，平时和女儿住在一起，后来柯南寄居在他家中，三人一起生活。</p>本来是个糊涂侦探，却因为经常以睡姿推理案情，屡破奇案，因此在业界享有“沉睡的小五郎”的美誉。实际上，他只是被柯南麻醉，借用声音说出真相，完全不记得过程，但仍对自己的推理能力深信不疑，认为自己有“双重人格”。</ol>  </li></font>";
			}else if(name=='毛利 兰'){
				showDiv.innerHTML="<img  src='./Image/MaoliLan.jpg' title='毛利 兰' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>毛利兰，日本漫画《名侦探柯南》及其衍生作品中的女主角，就读于帝丹高中2年级B班。父亲是私家侦探毛利小五郎，母亲是律政界女王妃英理，男友是高中生侦探工藤新一。居住在毛利侦探事务所，负责家里的家务，像姐姐一样照顾寄住在自己家的柯南。虽曾数次怀疑江户川柯南的身份，但还不知道江户川柯南的真实身份就是工藤新一。</ol> </li></font>";
			}else if(name=='灰原 哀'){
				showDiv.innerHTML="<img  src='./Image/HuiyuanAi.jpg' title='灰原 哀' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>灰原哀，日本漫画《名侦探柯南》及其衍生作品中的角色，帝丹小学一年B班学生、少年侦探团成员，原黑衣组织科学家。</p>本名宫野志保，曾隶属黑衣组织，代号为“雪莉（Sherry）”，是可使除神经组织以外的所有细胞退化至儿童时期的药物“APTX4869”主要发明者；因姐姐宫野明美遭组织无情杀害，而中断药品研究以示抗议，后被琴酒等人关押于研究所房间时，服下APTX4869，使得自己身体缩小，成功逃离并背叛组织。</p>寄宿于阿笠博士家中，并在其安排下，替换本名，化名灰原哀，并与江户川柯南就读同所小学。</ol></li></font>";
			}else if(name=='怪盗 基德'){
				showDiv.innerHTML="<img  src='./Image/GuaidaoJD.jpg' title='怪盗 基德' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>怪盗基德（日文：怪盗キッド；英文：Kid the Phantom Thief），又译怪盗小子、怪盗奇度，原名“怪盗1412号”（源自其国际罪犯代码“1412”），是日本动漫《魔术快斗》以及《名侦探柯南》中的角色。第一代的真实身份为黑羽盗一。一个充满传奇色彩的怪盗，拥有过人才智，精通易容、变声、逃脱术，以珠宝等各类贵重艺术品为目标，使用精妙的魔术手法进行犯案的超级盗窃犯。</ol></li></font>";
			}
	}
}

/*
	问题：
		通过option value属性 的形式来判断需要在Div中显示哪个图片 ，这个方法有个bug
		前两个值正常，后边的所有值 都会回退到第一个，查了资料也没有解决。
		换成option text属性 问题就轻而易举的解决了。。。
		
		要注意引号的使用，双引号里再使用双引号，稍不留神，就会找不到错误在哪里，F12找吧~ 
		
 */