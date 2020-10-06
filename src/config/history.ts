import {createBrowserHistory} from 'history'

// const history = createBrowserHistory()

const ENV = process.env.NODE_ENV;

let publicUrl: string = "";

if (ENV === "development") {
    publicUrl = "/"
} else if (ENV === "production") {
    publicUrl = "/potato-demo-test"
}

const history = createBrowserHistory({
    basename: publicUrl
});

export default history;