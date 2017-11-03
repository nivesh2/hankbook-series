## Unix 

```
  ls [options] [names] 
```
- *l* Displays the long format listing.
- *t* Displays newest files first.
- *r* Displays in reverse order.
- ```ls -ltr```
- ```ls -d */``` list all directories in current directory.
- ```ls -ltrd */``` is more structured way to list out directories of the current directory
	
```
grep [options] pattern [files]
```
- *l* (Display the filenames, but do not display the matched lines) 
- *w* (match word)
	``` grep -lw dataDir *``` checks in currently directory only

```	
cat [options] [files]
```
-  Examples:
    ```
     cat file1
     cat file1 file2 > all
     cat file1 >> file2
    ```

```
ps [options]
```
- *a* Displays all processes on a terminal, with the exception of group leaders
- *e* Displays all processes.
- *f* Displays a full listing.
- *l* Displays a long listing
- *plist* 	Displays data for the list of process IDs.
- *ulist* 	Displays data for the list of usernames.
- Example:
	```shell
		ps -ef
		ps -aux
	```

```
kill [options] IDs
```
- *l* Lists the signal names.
- *signal* The signal number of name. Using the signal number of 9, means that the kill is absolute.
``` kill -9 78689 ```
	
```
mv [options] sources target
```
- *f* 	Forces the move.
- *i* 	Prompt for a confirmation before overwriting any files.
```mv -f tech /usr```
	
	
## FTP
- ```ftp destination_url```
	- connects to the remote machine
- ```put path\file_name```
	- will copy the file form local machine to remote machine.
	- note: in put wildcards could not be used.
	- ```put D:\shared\*.txt``` will through error.
- ```get path\file_name```
	- will copy from the remote machine to local machine.
	- note: in get wildcards could not be used.
- ```mput path\file_name```
	- similar to put, but wildcards can be used.
	- ```mput D:\shared\*.txt``` will put all the text files to the remote machine .
- ```mget path\file_name```
	- similar to get, but wildcards can be used.
- ```del file_name```
	- Delete files from the remote computer. 
- ```mdel file_names```
	- Delete multiple files on the remote computer. 
- ```binary```
	- Switch to binary mode
- ```ascii```
	- Switch to ASCII mode. ASCII mode is the default mode; use it for transferring text files.

## SCP
`scp -r  -i ./privateKey.rsa username@IP_ADDRESS:/pathtodump/ /localpath/`
-r added for recursive fetching of all the folders

**Note:**

>Ascii mode transfers files as 'text'.Examples of ascii files would be .txt, .asp, .html, and .php files...
>Binary mode transfers files as raw data.Examples of binary files would be .wav, .jpg, .gif, and mp3 files...


## Shell scripts


	
	
	
	
