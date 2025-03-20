var obj={
    'A':'LJU',
    'B':['CSE','IT','CE'],
    'C':[{
        'D':'Hi',
        'E':['are',4, {'F':['semester','we']}]
    }],
    'G':{
        'H':'students',
        'I':['of','!']
    },
    'J':[{
        'K':'python',
        'L':'Branch'
    },'FSD2']
}
console.log(`${obj.C[0].D}${obj.G.I[1]} ${obj.C[0].E[2].F[1]} ${obj.C[0].E[0]} ${obj.G.H} ${obj.G.I[0]} ${obj.C[0].E[2].F[0]} ${obj.C[0].E[1]} ${obj.G.I[0]} ${obj.B[2]} ${obj.J[0].L}`);
