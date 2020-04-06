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

function validateIfIsNumber(str) {
	var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0
}

function formatDateTime(d) {
	var date = d.getDate().toString();
	var month = (d.getMonth() + 1).toString();
	var year = d.getFullYear().toString();
	var hour = d.getHours().toString();
	var minute = d.getMinutes().toString();
	var second = d.getSeconds().toString();
	
	if (date.length == 1) {
		date = "0" + date;
	}

	if (month.length == 1) {
		month = "0" + month;
	}

	if (hour.length == 1) {
		hour = "0" + hour;
	}

	if (minute.length == 1) {
		minute = "0" + minute;
	}

	if (second.length == 1) {
		second = "0" + second;
	}

	var formatted = date + "/" + (month) + "/" + year + " " + hour + ":" + minute + ":" + second;
	return formatted;
}

function formatIsoDateTime(d) {
	var date = d.getDate().toString();
	var month = (d.getMonth() + 1).toString();
	var year = d.getFullYear().toString();
	var hour = d.getHours().toString();
	var minute = d.getMinutes().toString();
	var second = d.getSeconds().toString();
	
	if (date.length == 1) {
		date = "0" + date;
	}

	if (month.length == 1) {
		month = "0" + month;
	}

	if (hour.length == 1) {
		hour = "0" + hour;
	}

	if (minute.length == 1) {
		minute = "0" + minute;
	}

	if (second.length == 1) {
		second = "0" + second;
	}

	var formatted = year + "-" + (month) + "-" + date + " " + hour + ":" + minute + ":" + second;
	return formatted;
}

function convertToDate(value) {
	var parts = $.trim(value).split(" ");

	var datePart = parts[0]; 
	
	var timePart = parts[1];
	
	var dateParts = datePart.split("/"); 
	
	var timeParts = timePart.split(":");
	
	var day = parseInt(dateParts[0], 10);
	var month = parseInt(dateParts[1], 10);
	var year = parseInt(dateParts[2], 10);

	var hour = parseInt(timeParts[0], 10);
	var minute = parseInt(timeParts[1], 10);
	var seconds = parseInt(timeParts[2], 10);

	return new Date(year, (+month-1), day, hour, minute, seconds);

}

function convertToIsoDate(value) {
	var parts = $.trim(value).split(" ");

	var datePart = parts[0]; 
	
	var timePart = parts[1];
	
	var dateParts = datePart.split("-"); 
	
	var timeParts = timePart.split(":");
	
	var year = parseInt(dateParts[0], 10);
	var month = parseInt(dateParts[1], 10);
	var day = parseInt(dateParts[2], 10);

	var hour = parseInt(timeParts[0], 10);
	var minute = parseInt(timeParts[1], 10);
	var seconds = parseInt(timeParts[2], 10);

	return new Date(year, (+month-1), day, hour, minute, seconds);

}

function showMessage(message) {
 $("#divMessage").addClass("alert-success");
 $("#divMessage").removeClass("alert-danger");
 $("#divMessage").html(message);
 $("#modalMessage").modal();
}

function showErrorMessage(message) {
 $("#divMessage").removeClass("alert-success");
 $("#divMessage").addClass("alert-danger");
 $("#divMessage").html(message);
 $("#modalMessage").modal();
}


