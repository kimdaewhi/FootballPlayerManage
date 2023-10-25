import { rest } from "msw";
import players from '../dummy_players.json';

const handlers = [
    // ⭐ ctx : HTTP 요청 및 응답에 대한 컨텍스트 객체.
    // ⭐ ctx와 res의 차이 : 응답 context를 제어할 수 있는 다양한 메서드 및 속성이 존재한다...

    // get 메서드. req : 요청 데이터, res : 서버로부터 response 받은 객체(?), ctx : 응답 결과 컨텍스트
    rest.get("/players", async(req, res, ctx) => {
        // 서버로부터 딜레이 후에 받았다고 가정하기 위해 2초 sleep
        await sleep(1000);
        // response 객체에 응답 context 코드, 응답 해준 json내용(?) 반환
        return res(ctx.status(200), ctx.json(players));
    }),
    
    // post 메서드. get과 마찬가지
    rest.post("/players", async(req, res, ctx) => {
        // 여기도 get과 마찬가지로 delay 예제
        await sleep(1000);

        // 서버에 데이터를 push할 내용(?)
        players.push({
            id: "000017",
            name: "Son heung min",
            country: "Korea, Republic of",
            height: 183,
            birth: "1992.07.08",
            age: 31,
            position: "LW, ST",
            club: "Tottenham Hotspur Football Club",
            shirtsnum: 7,
            foot: "R"
        });

        // 요청한 내용의 결과. 실패면 실패코드, 성공이면 성공 코드 및 변경된 데이터 객체 반환(?)
        return res(ctx.status(201), ctx.json(players));
    }),
];

async function sleep(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

export { handlers };