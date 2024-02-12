/* REVEAL EFFECT
 ********************************************************************************/
const elements = document.querySelectorAll('[data-reveal-group]')
const observer = new IntersectionObserver(entries => {
	entries.forEach(({ isIntersecting, target }) => {
		if (target instanceof HTMLElement) {
			target.dataset.revealGroup = isIntersecting ? 'active' : ''
		}
	})
})
elements.forEach(element => observer.observe(element))
