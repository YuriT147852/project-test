import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Routes from '@/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/public', express.static('public'));
app.use(Routes);

// dawson testing ------
// 大頭 testing ------

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});
