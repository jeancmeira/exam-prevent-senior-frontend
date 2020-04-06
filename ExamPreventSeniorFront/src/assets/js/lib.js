function validateDateTime(value) {
	var parts = $.trim(value).split(" ");

	if (parts.length != 2) {
		return false;
	}

	var datePart = parts[0]; 
	
	var timePart = parts[1];
	
	var dateParts = datePart.split("/"); 
	
	if (dateParts.length != 3) {
		return false;
	}

	var timeParts = timePart.split(":");
	
	if (timeParts.length != 3) {
		return false;
	}
		

	var day = parseInt(dateParts[0], 10);
	var month = parseInt(dateParts[1], 10);
	var year = parseInt(dateParts[2], 10);

	var hour = parseInt(timeParts[0], 10);
	var minute = parseInt(timeParts[1], 10);
	var seconds = parseInt(timeParts[2], 10);

	const date = new Date(year, (+month-1), day)
	const isValidDate = (Boolean(+date) && date.getDate() == day)	
	
	if (!isValidDate) {
		return false;
	}

	if (hour > 24 || hour < 0) {
		return false;
	}
	
	if (minute > 59 || hour < 0) {
		return false;
	}

	if (seconds > 59 || seconds < 0) {
		return false;
	}

	return true;
}

function validateIfIsEmpty(value) {
    if (value == null || $.trim(value) == "")
		return true;
	else
		return false;
}
