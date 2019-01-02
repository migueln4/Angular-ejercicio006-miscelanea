# AngularEjercicio006Miscelanea

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Ciclo de vida completo de un componente:
- `ngOnInit` -> Se dispara cuando el componente se está inicializando o después del primer ngOnChanges.
- `ngOnChanges` -> Se dispara cuando la data de las propiedades que se encuentran en nuestro componente cambian de alguna manera.
- `ngDoCheck` -> Se dispara cada vez que se hace una revisión del ciclo de detección de cambios. Es decir, cada vez que se hace algún cambio en una propiedad o en la pantalla.
- `ngAfterContentInit` -> Se dispara después de que se inserta algún tipo de contenido con las etiquetas <app-alguna-página>.
- `ngAfterContentChecked` -> Se dispara después de la revisión del contenido insertado del modo en el que se especifica anteriormente.
- `ngAfterViewInit` -> Se dispara después de que se haya hecho la inicilización de cada uno de los componentes o bien de los componentes-hijos.
- `ngAfterViewChecked` -> Se dispara después de que se haya efectuado la revisión de cada uno de los componentes o bien de los componentes-hijos.
- `ngOndestroy` -> Se dispara cuando se destruye un elemento o te mueves de vista. Incluso se dispara con el *ngIf del elemento.
