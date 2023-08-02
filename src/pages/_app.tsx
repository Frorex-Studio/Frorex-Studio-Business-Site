import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'

//styles
import '@/scss/globals.scss';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Component {...pageProps} />
        </div>
    )
}

export default App;