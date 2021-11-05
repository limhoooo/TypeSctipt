// JAVA: Exception
// JAVASCRIPT : Error


// Error(Exception) Handling: try -> catch -> finally

function readFile(filname: string): string {
    if (filname === 'not exist') {
        throw new Error("file not exist !");
    }
    return 'file contents'
}

function closeFile(filename: string) {

}

const filename = 'file';

try {
    console.log(readFile(filename));
} catch (e) {
    console.log('catch');
} finally {
    closeFile(filename);
}

