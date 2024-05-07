const sections = document.querySelectorAll(".oooooooooooooh-snap");

let options = {
  threshold: .5
};

let callback = entries => {
	entries.forEach((entry) => {
  	const intersecting = entry.isIntersecting		
		
        if(intersecting) {
            const deSection = entry.target;
			const huidigeSpreker = document.querySelector(".current");
            const nieuweSpreker = document.querySelector("[href='#" + deSection.id + "']");

            if(huidigeSpreker) {
				huidigeSpreker.classList.remove("current");
			}
						
			if(nieuweSpreker) {
				nieuweSpreker.classList.add("current");
			}
  	    };
	})
};

let observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
	observer.observe(section);
});