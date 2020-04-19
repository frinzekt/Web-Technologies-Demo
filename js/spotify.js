const toggleLoading = () => {
	$('.loader').toggle();
	$('#ajax-demo').toggle();

	//DISABLE BUTTON WHILE LOADING
	if ($('#submit').attr('disabled')) {
		$('#submit').attr('disabled', false);
	} else {
		$('#submit').attr('disabled', true);
	}

	window.isLoading = !window.isLoading;
};

const getToken = async () => {
	const data = await (await fetch('https://spotify-token-authenticator.frinzelapuz.now.sh/api/token')).json();
	localStorage.setItem('accessToken', data.accessToken);
	return data.accessToken;
};
const feedback = (message) => {
	const container = document.querySelector('#ajax-demo');
	container.innerHTML = `<div class="container d-flex justify-content-center"><p class="text--color-error">${message}</p></div>`;
};
const addSong = ({ id, name, artist, preview_url, pictureUrl }) => {
	const container = document.querySelector('#ajax-demo');

	// Simulated JSX - JavaScript in XML/HTML
	container.innerHTML += `<div class="col-md-6 col-sm-12 background--color-contrast-high text--color-white song" style="padding:10px;margin:0px">
						<div class="row" style="margin:0px">
							<div class="song-description col-md-6 col-sm-12" >
								<div class="avatar-root">
									<img class="avatar" src="${pictureUrl}" alt="" />
								</div>
								<div style="margin: 0px;">
									<div style="margin: 0px;">
										${name}
									</div>
									<div style="margin: 0px;">
										${artist}
									</div>
								</div>

							</div>
							<div class="col-md-5 col-sm-12 song-preview">
								${
									preview_url
										? `<audio controls style="width:100%;height:3em"/>
									<source
										src="${preview_url}"
										type="audio/mpeg">
									Your browser does not support the audio element.
								</audio>`
										: `Preview Not Available `
								}
							</div>
						</div>
					</div>`;
};
const removeSongs = () => {
	const container = document.querySelector('#ajax-demo');
	container.innerHTML = ``;
};
const requestParamsWithAuth = (accessToken) => ({
	method: 'GET',
	headers: {
		Authorization: 'Bearer ' + accessToken,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
const searchSongs = async (e) => {
	e.preventDefault();
	removeSongs();
	const accessToken = await getToken();
	const formData = $('form').serializeArray()[0].value;
	if (formData) {
		toggleLoading();
		const requestParams = requestParamsWithAuth(accessToken);
		try {
			// POSSIBLE CONNECTION ERROR
			const spotifyData = await (
				await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(formData.trim())}&type=album`, requestParams)
			).json();
			if (spotifyData.albums.total) {
				//If Everything is a single, load all 20 singles
				if (spotifyData.albums.items.every((album) => album.album_type == 'single')) {
					spotifyData.albums.items.forEach((album) => loadSongs(album.id));
				} else {
					loadSongs(spotifyData.albums.items[0].id);
				}
			} else {
				// NO VALID SEARCHES
				toggleLoading();
				feedback('Oh noo...Your Track Cannot Be Found :(');
			}
		} catch (e) {
			// SOME FETCH ERROR
			toggleLoading();
			feedback('Oh noo... Something Went Wrong :(');
		}
	} else {
		// EMPTY FORM
		feedback('Put Something Here Please :)');
	}
};
const loadSongs = async (trackId = '0MQpgi6zSeof8DKvc9ymZO', callbackfn) => {
	const accessToken = await getToken();

	const requestParams = requestParamsWithAuth(accessToken);
	try {
		//POSSIBLE FETCH ERROR
		const spotifyData = await (await fetch(`https://api.spotify.com/v1/albums/${trackId}/tracks`, requestParams)).json();

		const spotifyDataRFU = await spotifyData.items.map(async ({ name, id, artists, preview_url }) => {
			const songIndividualData = await (await fetch(`https://api.spotify.com/v1/tracks/${id}`, requestParams)).json();
			const pictureUrl = songIndividualData.album.images[0].url;
			return {
				id,
				name,
				artist: artists[0].name,
				preview_url,
				pictureUrl,
			};
		});
		Promise.all(spotifyDataRFU).then((results) => results.map((song) => addSong(song)));
	} catch (e) {
		// SOME POSSIBLE FETCH ERROR
		feedback(e);
	} finally {
		toggleLoading();
	}
};
toggleLoading();
loadSongs();
