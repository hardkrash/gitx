
	var mode_change = false;
	var old_mode = "";
	var new_mode = "";
			callbacks["newfile"](startname, endname, "file_index_" + (file_index - 1), mode_change, old_mode, new_mode);
		
		if (binary && endname == "/dev/null") {	// in cases of a deleted binary file, there is no diff/file to display
			line1 = "";
			line2 = "";
			diffContent = "";
			file_index++;
			startname = "";
			endname = "";
			return;				// so printing the filename in the file-list is enough
		}
			if (binary) {
				if (callbacks["binaryFile"])
					finalContent += callbacks["binaryFile"](binaryname);
				else
					finalContent += "<div>Binary file differs</div>";
			}
			mode_change = false;

			if(match = l.match(/^diff --git (a\/)+(.*) (b\/)+(.*)$/)) {	// there are cases when we need to capture filenames from
				startname = match[2];					// the diff line, like with mode-changes.
				endname = match[4];					// this can get overwritten later if there is a diff or if
			}								// the file is binary

			if (firstChar == "n") {
				if (l.match(/^new file mode .*$/))
					startname = "/dev/null";
				continue;
			}
				if (match = l.match(/^Binary files (a\/)?(.*) and (b\/)?(.*) differ$/))
			if (match = l.match(/^old mode (.*)$/)) {
				mode_change = true;
				old_mode = match[1];
			}

			if (match = l.match(/^new mode (.*)$/)) {
				mode_change = true;
				new_mode = match[1];
			}

