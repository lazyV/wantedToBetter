function trans (str) {
	return str.split(' ').map(s => s.split('').map(v => parseInt(v)))
}