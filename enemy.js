class Enemy extends Tank {
	constructor(opts){
		super();
		Object.assign( this.def,opts );
	}
	mad(){//随机乱方向
		let _this = this; 
		setTimeout(function(){
			_this.def.dir = _this.def.dirMap[parseInt( Math.random()*4 )];
//			console.log(parseInt( Math.random()*4 ));
			_this.mad();
		},Math.random()*2000)
	}
	autoFire(){
		var that = this;
		setTimeout(function(){
			that.shot();
			that.autoFire();	
		},Math.random()*2000+2000)
	}
	init(){
		this.creatDiv();//创建
		this.move();//执行移动
		this.mad();
		this.autoFire();//发射子弹
	}
}