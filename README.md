## 라이브러리에서의 타입스크립트

#### Third party library가 만약 타입을 지원하지 않는다면 직접 타입을 선언해줘야 하는데 이것을 'index.d.ts'안에서 해 줄수 있다.

###### d.ts 파일 (선언코드만 담긴 파일)

- 구현부가 아닌 선언부만을 작성하는 용도의 파일을 의미한다.
- JS코드로 컴파일 되지 않는다.
- 이 파일에 작성되는 decalre 블록의 필드에서는 export 키워드가 기본적으로 붙기 때문에 또 붙여줄 필요가 없다.

---

- 사용하는 법

1. 'tsconfig.ts' 파일을 수정한다.
2. 'compilerOptions'에 'typeRoots'라는 속성을 추가해 주고 배열 안에 index.d.ts를 선언 할 Root를 설정 해 준다. 이때 typeRoot는 자신이 원하는 경로를 지정하고 설정할 수 있다.

```
{
    conpilerOptions:{
        "typeRoots":["./types"] // 보통 types 폴더를 만들어서 타입 정의
      }
}

```

3. typeRoot로 지정된 곳에 index.d.ts 파일을 만들어 주면 된다.

```
>>types/index.d.ts

declare module 'example'{
    const exampleVar:boolean;
    export default exampleVar;
}
```

- index.d.ts에서의 선언 방식

### Ambient declarations (앰비언트 선언방식 - 구현이 없는 선언)

#### 타입스크립트 컴파일러에 JS에 대한 구현'환경'정보를 준다.

- ambient variables

```
declare let hello:any;
```

- ambient module
- 모듈내에서는 Interface, class, function등의 요소를 선언할 수 있다.

```
declare module "module1"
```

## 리액트에서 타입스크립트 사용하기

### Props

```
type CardProps={  // type ver
    title:string,
    img:string,
    author?:string // optional
}

interface CardProps2{ //interface ver
     title:string,
    img:string,
    author?:string // optional
}

const Card=({title,img,author}:CardProps)=>{
    return (
    <>
    <span>{title} {author}</span>
    <img src={img}>
    </>)

}

const Card:React.FC<CardProps>=(props)=>{
    return
    (<>
    <span>{title} {author}</span>
    <img src={img}>
    </>)
}
```

##### React.FC란 해당 컴포넌트가 리액트의 함수형 컴포넌트라는것을 알려주는 방법

##### React.StatelessComponent(SFC) state를 가지고 있지않은 리액트 컴포넌트

```
interface ButtonProps {
  color: string
}

const Button: StatelessComponent<ButtonProps> = ({ color, children }) => (
  <button style={{ color }}>{children}</button>
)
```

### State 관리

- 함수형 컴포넌트는 타입스크립트 없이 컴포넌트를 작성하는 것과 별 차이가 없다. Hooks는 class 컴포넌트와 달리, useState를 사용할 때 Generics를 사용하지 않아도 타입을 유추하기 때문에 생략해도 상관없기 때문이다.

#### useState가 타입을 지정해야 할 때

1. 상태가 null일 수도 있고 아닐수도 있을때

```
type Information={name:string; desc:string;};
const [info, setInformation] = useState<Information | null >(null)
```

2. 상태가 타입이 까다로운 구조를 가진 객체이거나 배열일 때는 Generics를 명시하는 것이 좋다.

```
type Todo={id:number; name:string;}
const [todos, setTodos]=useState<Todo[]>([]);
```
