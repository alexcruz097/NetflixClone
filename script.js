const questionIcon = document.querySelectorAll('#icon');
const questions = document.querySelectorAll('.questionBTN');
const answers = document.querySelectorAll('.answer');
const videos = document.querySelectorAll("video");


questions.forEach((question, index) => {
	question.addEventListener('click', (e) => {
		// open tab
			questionIcon[index].classList.toggle('rotateIcon');
		answers[index].classList.toggle('toggleQuestionDisplay');
		// closed all other tabs
	});
});

// remove

videos.forEach((video) => {
	video.autoplay;
	video.loop = true;

})