import AuthContext from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import './globals.css';

export const metadata = {
  title: 'Sneaker Admin',
  description: 'Sneaker Admin',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
