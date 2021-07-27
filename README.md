# <img src="icon.png" height="28"> Rel. To Abs.

Turn static css elements into absolute ones with smooth transitions and touch gestures.

## Usage

RTA can be used without configuration, juste provide an element to apply effects.

html :
```html
<div id="photo">
    <div class="photo">
        <!-- animated div -->
        <div class="photo__img">
            <img src="https://picsum.photos/400/300" alt="">
        </div>
        <!-- hidden elements that appear on absolute view -->
        <div class="photo__box">
            <button class="photo__box-btn material-icons rta--close">close</button>
        </div>
    </div>
</div>
```

js :
```js
const openablePhoto = document.getElementById('photo');
new RelToAbs(openablePhoto);
```

## Commands

```sh
$ npm run dev
$ npm run build
```