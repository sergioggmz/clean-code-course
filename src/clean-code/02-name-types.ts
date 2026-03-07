(() => {

    const temperaturesCelsius: number[] = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users: { id: number; email: string }[] = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' }
    ];

    const userEmails: string[] = users.map( user => user.email );

    const canJump: boolean = false;
    const canRun: boolean = true;
    const hasItems: boolean = false;
    const isLoading: boolean = false;


    const startTime = new Date().getTime();

    const endTime = new Date().getTime() - startTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksFromUrl( u: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( s: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
})();




