import apiUri from '../api/getApiUri'
import publicIp from 'public-ip'

export async function verifyToken(){
    if(!sessionStorage.getItem('token')){
        alert ("토큰 검증에 실패했습니다.");
        window.location.replace('/');
        return false;
    }

    const queryHeader: any = {
        'Content-Type': 'application/json',
        'x-access-token' : sessionStorage.getItem('token')
    }
    const queryBody: any = {
        userip : publicIp.v4()
    }
    await fetch(apiUri + "/user/verify",{
        method:"POST",
        body:JSON.stringify(queryBody),
        headers:queryHeader
    }).then(res => res.json())
    .then(data => {
        if(data.message){
            alert(data.message);
            window.location.replace("/");
        }
    })

    
}

export default verifyToken;