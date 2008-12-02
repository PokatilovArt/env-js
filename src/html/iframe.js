$log("Defining HTMLIFrameElement");
/* 
* HTMLIFrameElement - DOM Level 2
*/
$w.__defineGetter__("HTMLIFrameElement", function(){
  return function(){
    throw new Error("Object cannot be created in this context");
  };
});

var HTMLIFrameElement = function(node){
  var $dom = node, 
      $id = createGUID();
  __extend__(this, new HTMLElement(node));
  return __extend__(this,{
		get accessKey() { return this.getAttribute("id") || ""; },
		set accessKey(val) { return this.setAttribute("id",val); },
		get charset() { return this.getAttribute("id") || ""; },
		set charset(val) { return this.setAttribute("id",val); },
		get coords() { return this.getAttribute("id") || ""; },
		set coords(val) { return this.setAttribute("id",val); },
		get href() { return this.getAttribute("id") || ""; },
		set href(val) { return this.setAttribute("id",val); },
		get hreflang() { return this.getAttribute("id") || ""; },
		set hreflang(val) { return this.setAttribute("id",val); },
		get name() { return this.getAttribute("id") || ""; },
		set name(val) { return this.setAttribute("id",val); },
		get rel() { return this.getAttribute("id") || ""; },
		set rel(val) { return this.setAttribute("id",val); },
		get rev() { return this.getAttribute("id") || ""; },
		set rev(val) { return this.setAttribute("id",val); },
		get shape() { return this.getAttribute("id") || ""; },
		set shape(val) { return this.setAttribute("id",val); },
		get tabIndex() { return this.getAttribute("id") || ""; },
		set tabIndex(val) { return this.setAttribute("id",val); },
		get target() { return this.getAttribute("id") || ""; },
		set target(val) { return this.setAttribute("id",val); },
		get type() { return this.getAttribute("id") || ""; },
		set type(val) { return this.setAttribute("id",val); },
		blur:function(){blur(this);},
		focus:function(){focus(this);},
		get hash(){
			var m = hash.exec(this.href);
			return m&&m.length>1?m[1]:"";
		},
		set hash(_hash){
			//setting the hash is the only property of the location object
			//that doesn't cause the window to reload
			_hash = _hash.indexOf('#')===0?_hash:"#"+_hash;	
			this.href = this.protocol + this.host + this.pathname + this.search + _hash;
		},
		get host(){
			return this.hostname + (this.port !== "")?":"+this.port:"";
		},
		set host(_host){
			this.href = this.protocol + _host + this.pathname + this.search + this.hash;
		},
		get hostname(){
			var m = hostname.exec(this.href);
			return m&&m.length>1?m[1]:"";
		},
		set hostname(_hostname){
			this.href = this.protocol + _hostname + ((this.port==="")?"":(":"+this.port)) +
			 	 this.pathname + this.search + this.hash;
		},
		get pathname(){
			var m = this.href;
			m = pathname.exec(m.substring(m.indexOf(this.hostname)));
			return m&&m.length>1?m[1]:"/";
		},
		set pathname(_pathname){
			this.href = this.protocol + this.host + _pathname + 
				this.search + this.hash;
		},
		get port(){
			var m = port.exec(this.href);
			return m&&m.length>1?m[1]:"";
		},
		set port(_port){
			this.href = this.protocol + this.hostname + ":"+_port + this.pathname + 
				this.search + this.hash;
		},
		get protocol(){
			return protocol.exec(this.href)[0];
		},
		set protocol(_protocol){
			this.href = _protocol + this.host + this.pathname + 
				this.search + this.hash;
		},
		get search(){
			var m = search.exec(this.href);
			return m&&m.length>1?m[1]:"";
		},
		set search(_search){
			this.href = this.protocol + this.host + this.pathname + 
				_search + this.hash;
		}
  });
};


			