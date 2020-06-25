
 // portfolio item filter

 const filterContainer = document.querySelector(".portfolio-filters"),
 	   filterBtns = filterContainer.children,
 	   totalfilterBtns = filterBtns.length,
 	   portfolioItems=document.querySelectorAll(".portfolio-item"),
 	   TotalportfolioItems=portfolioItems.length;

 	   for(let i=0; i<totalfilterBtns; i++){
 	   		filterBtns[i].addEventListener("click",function(){
 	   			filterContainer.querySelector(".active").classList.remove("active");
 	   			this.classList.add("active");

 	   			const filtervalue=this.getAttribute("data-filter");
 	   			console.log(filtervalue);
 	   			for(let k=0; k<TotalportfolioItems; k++)
 	   			{
 	   				if( filtervalue === portfolioItems[k].getAttribute("data-category"))
 	   				{	
 	   					portfolioItems[k].classList.remove("hide");
 	   					portfolioItems[k].classList.add("show");
 	   				}
 	   				else
 	   				{
 	   					portfolioItems[k].classList.remove("show");
 	   					portfolioItems[k].classList.add("hide");
 	   				}

 	   				if( filtervalue === "All")
 	   				{
 	   					portfolioItems[k].classList.remove("hide");
 	   					portfolioItems[k].classList.add("show");
 	   				}
 	   			}
 	   		})
 	   }


// Lightbox

const lightbox=document.querySelector(".lightbox"),
	  lightboxImg=lightbox.querySelector(".lightbox-img"),
	  lightboxClose=lightbox.querySelector(".lightbox-close"),
	  lightboxText=lightbox.querySelector(".caption-text"),
	  lightboxCounter=lightbox.querySelector(".caption-counter");

let itemIndex=0;

for(let i=0; i<TotalportfolioItems; i++){
	portfolioItems[i].addEventListener("click",function(){
		itemIndex=i;
		changeItem();
		toggleLightbox();
	})
}

function nextItem(){
	if(itemIndex == TotalportfolioItems-1){
		itemIndex=0;
	}
	else{
		itemIndex++;
	}
	changeItem();
}

function prevItem(){
	if(itemIndex == 0){
		itemIndex=TotalportfolioItems-1;
	}
	else{
		itemIndex--;
	}
	changeItem();
}

function toggleLightbox() {
	lightbox.classList.toggle("open");
}

function changeItem(){
	imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
	lightboxImg.src=imgSrc;
	lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
	lightboxCounter.innerHTML=(itemIndex+1) + "of" + TotalportfolioItems;
}

// close lightbox

lightbox.addEventListener("click",function(event){
	if(event.target === lightboxClose || event.target===lightbox){
		toggleLightbox();
	}
})


//Aside Navbar

const nav=document.querySelector(".nav"),
	  navList=nav.querySelectorAll("li"),
	  totalNavList=navList.length,
	  allSection=document.querySelectorAll(".section"),
	  totalSections=allSection.length;

for(let i=0; i<totalNavList; i++){
	const a=navList[i].querySelector("a");
	a.addEventListener("click",function(){
		for(let k=0; k<totalNavList; k++){
			navList[k].querySelector("a").classList.remove("active")
		}

	 this.classList.add("active");

	 showSection(this);
	})
}

function showSection(element){
	for(let i=0; i<totalSections; i++){
		allSection[i].classList.remove("active");	
	}
	const target=element.getAttribute("href").split("#")[1];
		 
	document.querySelector("#"+target).classList.add("active")
}


const navTogglerBtn=document.querySelector(".nav-toggler"),
	  aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",function asideSectionTogglerBtn(){

	aside.classList.toggle("open");
	navTogglerBtn.classList.toggle("open");
})

