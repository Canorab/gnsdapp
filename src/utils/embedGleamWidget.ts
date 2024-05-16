// @ts-nocheck
export function embedCompetition(el, html) {
	el.innerHTML = html;
	// El.innerHTML =
	// '<a class="e-widget generic-loader" href="https://gleam.io/GRq5F/gleam-sweepstakes" rel="nofollow">My Competition</a><script type="text/javascript" src="https://widget.gleamjs.io/e.js" async="true"></script>';

	Array.from(el.querySelectorAll('script')).forEach((oldScript) => {
		const newScript = document.createElement('script');
		Array.from(oldScript.attributes).forEach((attr) => {
			newScript.setAttribute(attr.name, attr.value);
		});
		newScript.appendChild(document.createTextNode(oldScript.innerHTML));
		oldScript.parentNode.replaceChild(newScript, oldScript);
	});
}

// Export const embedCode =
// 	'<a class="e-widget generic-loader" href="https://gleam.io/GRq5F/gleam-sweepstakes" rel="nofollow">My Competition</a><script type="text/javascript" src="https://widget.gleamjs.io/e.js" async="true"></script>';

export const gnsTask =
	'<a class="e-widget no-button" href="https://gleam.io/S7oyH/gravityx-airdrop" rel="nofollow">GravityX Airdrop</a><script type="text/javascript" src="https://widget.gleamjs.io/e.js" async="true"></script>';
