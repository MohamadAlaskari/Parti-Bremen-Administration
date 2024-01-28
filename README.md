# PartiBremenAdministration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## project Structur

Parti-Bremen-Administration/
│
├── node_modules/                      # Abhängigkeiten des Projekts
│
├── src/
│   ├── app/
│   │   ├── components/                # Standalone-Komponenten
│   │   │   ├── header/                # Header-Komponente
│   │   │   │   ├── header.component.ts
│   │   │   │   └── header.component.scss
│   │   │   ├── sidebar/               # Sidebar-Komponente
│   │   │   │   ├── sidebar.component.ts
│   │   │   │   └── sidebar.component.scss
│   │   │   └── ...                    # Weitere Komponenten
│   │   │
│   │   ├── pages/                     # Standalone-Seiten
│   │   │   ├── dashboard/             # Dashboard-Seite
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   └── dashboard.component.scss
│   │   │   ├── login/                 # Login-Seite
│   │   │   │   ├── login.component.ts
│   │   │   │   └── login.component.scss
│   │   │   ├── register/              # Registrierungsseite
│   │   │   │   ├── register.component.ts
│   │   │   │   └── register.component.scss
│   │   │   └── ...                    # Weitere Seiten
│   │   │
│   │   ├── services/                  # Dienste
│   │   │   ├── api/                   # API-Interaktionsdienste
│   │   │   │   ├── api.service.ts     # Allgemeiner API-Dienst
│   │   │   │   └── ...                # Spezifische API-Dienste
│   │   │   ├── auth/                  # Authentifizierungsdienste
│   │   │   │   ├── auth.service.ts    # Authentifizierungsservice
│   │   │   │   └── ...                # Weitere Auth-Dienste
│   │   │   └── ...                    # Andere Dienste
│   │   │
│   │   ├── models/                    # Datenmodelle und Interfaces
│   │   │   └── ...                    # Modelldefinitionen
│   │   │
│   │   ├── utilities/                 # Hilfsfunktionen und Utilities
│   │   │   └── ...                    # Utility-Methoden
│   │   │
│   │   ├── guards/                    # Routen-Guards
│   │   │   ├── auth.guard.ts          # Auth-Guard für geschützte Routen
│   │   │   └── ...                    # Weitere Guards
│   │   │
│   │   ├── interceptors/              # HTTP-Interceptors
│   │   │   ├── auth.interceptor.ts    # Auth-Interceptor für HTTP-Anfragen
│   │   │   └── ...                    # Weitere Interceptors
│   │   │
│   │   ├── app-routing.ts             # Haupt-Routing-Konfiguration
│   │   └── main.ts                    # Haupt-Einstiegspunkt der Anwendung
│   │
│   ├── assets/                        # Statische Ressourcen
│   │   ├── images/                    # Bildressourcen
│   │   ├── fonts/                     # Schriftarten
│   │   └── ...                        # Weitere Assets
│   │
│   ├── environments/                  # Umgebungskonfigurationen
│   │   ├── environment.prod.ts        # Produktionsumgebung
│   │   └── environment.ts             # Entwicklungsumgebung
│   │
│   ├── styles/                        # Globale Stylesheets
│   │   ├── variables.scss             # SCSS-Variablen
│   │   └── common.scss                # Gemeinsame Styles
│   │
│   ├── index.html                     # Haupt-HTML-Datei
│   ├── main.ts                        # Haupt TypeScript Einstiegspunkt
│   ├── polyfills.ts                   # Polyfills für Browser-Kompatibilität
│   └── styles.scss                    # Haupt-Stylesheet (globale Styles)
│
├── e2e/                               # End-to-End-Tests
│   └── ...                            # E2E-Testkonfiguration und -skripte
│
├── angular.json                       # Angular-Konfigurationsdatei
├── package.json                       # NPM Paketdefinitionen und Skripte
├── README.md                          # Projektbeschreibung und Dokumentation
├── .gitignore                         # Git Ignorierungsregeln
├── tsconfig.json                      # TypeScript Konfiguration
└── tslint.json oder eslint.json       # Linting Konfiguration

