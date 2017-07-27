export class MyCustomObserver {

    next(val:any) {
        console.log(`value: ${val}`);
    }

    error(err:any) {
        console.log(`error: ${err}`);
    }

    complete() {
        console.log(`complete`);
    }

}