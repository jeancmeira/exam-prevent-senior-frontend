function validateDateTime(value) {
	alert(value);

	return true;
}

function validateIfIsEmpty(value) {
    if (value == null || $.trim(value) == "")
		return true;
	else
		return false;
}