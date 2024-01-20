new Vue({
	el: '#app',
	data: {
	  schet: 0,
	  members: ['Коммуникации', 'Творчество', 'Логистика', 'Схемотехника', 'Кулинария', 'Медицина'],
	  imagePath: 'robots/'
	},
	methods: {
	  leftbut() {
		this.schet--;
		if (this.schet < 0) {
		  this.schet = 5;
		}
		this.team_member();
	  },
	  rightbut() {
		console.log("right");
		this.schet++;
		if (this.schet > 5) {
		  this.schet = 0;
		}
		this.team_member();
	  },
	  team_member() {
		for (let i = 0; i <= 5; i++) {
		  const elementId = `mem_${i}`;
		  document.getElementById(elementId).style.display = (this.schet === i) ? 'block' : 'none';
		}
	  },
	  getImagePath(index) {
		return this.imagePath + ((index + 6) % 6) + '.jpg';
	  }
	},
	mounted() {
	  this.team_member();
	}
});


new Vue({
	el: '#send',
	data: {
		email: ''
	},
	methods: {
		sendData() {
		alert("Спасибо! Совсем скоро мы свяжемся с вами!");
		}
	}
});
