<template>
  <main>
    <section class="my-5 py-5">
      <b-container>
        <b-row>
          <b-col md="4">
            <h1 class="subtitle">Schlafen</h1>
            <p class="h1">Erholsame Nächte und leckeres Frühstück</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container>
        <b-row>
          <b-col md="5">
            <h2 class="subtitle">Hotel Garni</h2>
            <p class="h2 mb-3">
              Wer während eines Kurzurlaubs Erholung und Entspannung sucht, ist
              in unserem Gästehaus gut aufgehoben.
            </p>
            <p>
              Hier befinden sich zehn ansprechende Nichtraucher-Gästezimmer mit
              Dusche/WC und variablen Doppel- oder Einzelbetten. Fünf der Zimmer
              verfügen außerdem über eine kleine Kochnische mit Kühlschrank.
              Zwei der Doppelzimmer haben eine Verbindungstür und können als
              Familienzimmer genutzt werden.
            </p>
            <p>
              Alle Zimmer haben einen Fernseher mit Satellitenempfang und
              kostenloses Internet via W-Lan. Die Zimmer im unteren Geschoss
              haben zudem eine kleine Terasse. Auf Wunsch stellen wir ein
              Kinderreisebett zur Verfügung. Nebenan im Gasthaus zum Lamm können
              Sie in aller Ruhe frühstücken. Radfahrer sind uns willkommen und
              können ihre Räder in einem Abstellraum sicher unterstellen. Aber
              auch Parkplätze sind vorhanden. Anders als in den Ferienwohnungen
              sind im Gästehaus keine Haustiere erlaubt.
            </p>
          </b-col>
          <b-col md="6" offset-md="1">
            <b-row>
              <b-carousel
                id="carousel-1"
                v-model="slide"
                controls
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=52"
                ></b-carousel-slide>

                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=54"
                >
                </b-carousel-slide>

                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=58"
                ></b-carousel-slide>
              </b-carousel>
            </b-row>
            <b-row class="align-items-center my-5">
              <b-col md="6">
                <IconBox
                  label="Frühstück für 10,00 €/Person"
                  icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                      <path
                        d="M159.079,241.957c30.439,37.846,68.547,74.36,81.622,86.589l58.483-33.174c-2.816-13.031-9.573-42.649-19.39-75.255-.737-.048-1.455-.072-2.151-.072-13.729,0-18.488,8.752-24.696,23.167-4.63,10.753-22.131,30.491-42.948,22.788-27.938-10.337-28.27-33.203-22-43,16-25-15-33-28-10-3.101,5.486-5,17-.921,28.957Z"
                        fill="#e9c399"
                      />
                      <g>
                        <path
                          d="M294.636,227.914c-14.824-51.753-30.324-89.331-46.071-111.716-.44-.83-1.254-1.425-2.219-1.565l-49.256-7.132-39.156-45.245c-.638-.735-1.578-1.112-2.562-1.022-.605,.06-14.939,1.512-23.897,6.594s-17.561,16.639-17.922,17.128c-.579,.783-.742,1.798-.437,2.723l18.742,56.823-19.154,45.937c-.016,.038-.024,.078-.038,.116-.025,.068-.047,.136-.067,.205-.029,.098-.051,.197-.069,.296-.012,.067-.024,.133-.032,.2-.012,.109-.016,.218-.016,.328,0,.06-.004,.119,0,.18,.01,.168,.03,.335,.068,.499,.003,.012,.008,.023,.01,.034,.038,.159,.091,.313,.155,.464,.006,.015,.008,.03,.015,.044,11.061,25.047,35.421,57.757,72.406,97.221,27.46,29.301,52.025,51.595,52.271,51.816,.565,.513,1.287,.776,2.015,.776,.507,0,1.017-.128,1.479-.391l69.928-39.666c1.126-.639,1.715-1.927,1.462-3.196-.065-.324-6.595-32.849-17.653-71.453ZM134.436,73.046c6.284-3.565,16.23-5.159,20.004-5.658l36.45,42.118-54.129,30.704-17.447-52.896c2.365-2.983,8.837-10.702,15.122-14.267Zm2.996,73.681l29.354-16.651,29.354-16.651,40.675,5.89-46.141,26.173-69.06,39.173,15.818-37.935Zm102.406,189.207c-12.545-11.57-95.134-88.941-120.498-143.084l125.649-71.273c33.457,49.553,57.485,160.14,60.979,176.845l-66.13,37.512Z"
                          fill="#333854"
                        />
                        <path
                          d="M69.854,180.462c-.188-1.647-1.688-2.829-3.32-2.64-1.646,.188-2.829,1.675-2.641,3.321,6.357,55.689,58.102,100.151,60.301,102.016,.563,.479,1.253,.712,1.938,.712,.851,0,1.695-.36,2.289-1.06,1.072-1.263,.917-3.155-.346-4.228-.521-.442-52.137-44.822-58.222-98.122Z"
                          fill="#333854"
                        />
                        <path
                          d="M322.968,184.304c-.107-.717-2.693-17.807-9.816-39.549-11.968-36.532-27.144-56.568-37.767-66.943-1.184-1.157-3.083-1.134-4.242,.05-1.157,1.186-1.135,3.085,.051,4.242,35.257,34.434,45.737,102.4,45.839,103.083,.223,1.489,1.503,2.558,2.964,2.558,.147,0,.296-.011,.445-.033,1.639-.244,2.77-1.77,2.526-3.408Z"
                          fill="#333854"
                        />
                      </g>
                      <path
                        d="M197,195.067c-5-3.067,5.667-33.606,18-25.067,13,9-12.578,28.394-18,25.067Z"
                        fill="#e9c399"
                      />
                    </svg>'
                ></IconBox>
              </b-col>
              <b-col md="6">
                <IconBox
                  label="Preise für längere Zeiträume"
                  icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                      <path
                        d="M159.079,241.957c30.439,37.846,68.547,74.36,81.622,86.589l58.483-33.174c-2.816-13.031-9.573-42.649-19.39-75.255-.737-.048-1.455-.072-2.151-.072-13.729,0-18.488,8.752-24.696,23.167-4.63,10.753-22.131,30.491-42.948,22.788-27.938-10.337-28.27-33.203-22-43,16-25-15-33-28-10-3.101,5.486-5,17-.921,28.957Z"
                        fill="#e9c399"
                      />
                      <g>
                        <path
                          d="M294.636,227.914c-14.824-51.753-30.324-89.331-46.071-111.716-.44-.83-1.254-1.425-2.219-1.565l-49.256-7.132-39.156-45.245c-.638-.735-1.578-1.112-2.562-1.022-.605,.06-14.939,1.512-23.897,6.594s-17.561,16.639-17.922,17.128c-.579,.783-.742,1.798-.437,2.723l18.742,56.823-19.154,45.937c-.016,.038-.024,.078-.038,.116-.025,.068-.047,.136-.067,.205-.029,.098-.051,.197-.069,.296-.012,.067-.024,.133-.032,.2-.012,.109-.016,.218-.016,.328,0,.06-.004,.119,0,.18,.01,.168,.03,.335,.068,.499,.003,.012,.008,.023,.01,.034,.038,.159,.091,.313,.155,.464,.006,.015,.008,.03,.015,.044,11.061,25.047,35.421,57.757,72.406,97.221,27.46,29.301,52.025,51.595,52.271,51.816,.565,.513,1.287,.776,2.015,.776,.507,0,1.017-.128,1.479-.391l69.928-39.666c1.126-.639,1.715-1.927,1.462-3.196-.065-.324-6.595-32.849-17.653-71.453ZM134.436,73.046c6.284-3.565,16.23-5.159,20.004-5.658l36.45,42.118-54.129,30.704-17.447-52.896c2.365-2.983,8.837-10.702,15.122-14.267Zm2.996,73.681l29.354-16.651,29.354-16.651,40.675,5.89-46.141,26.173-69.06,39.173,15.818-37.935Zm102.406,189.207c-12.545-11.57-95.134-88.941-120.498-143.084l125.649-71.273c33.457,49.553,57.485,160.14,60.979,176.845l-66.13,37.512Z"
                          fill="#333854"
                        />
                        <path
                          d="M69.854,180.462c-.188-1.647-1.688-2.829-3.32-2.64-1.646,.188-2.829,1.675-2.641,3.321,6.357,55.689,58.102,100.151,60.301,102.016,.563,.479,1.253,.712,1.938,.712,.851,0,1.695-.36,2.289-1.06,1.072-1.263,.917-3.155-.346-4.228-.521-.442-52.137-44.822-58.222-98.122Z"
                          fill="#333854"
                        />
                        <path
                          d="M322.968,184.304c-.107-.717-2.693-17.807-9.816-39.549-11.968-36.532-27.144-56.568-37.767-66.943-1.184-1.157-3.083-1.134-4.242,.05-1.157,1.186-1.135,3.085,.051,4.242,35.257,34.434,45.737,102.4,45.839,103.083,.223,1.489,1.503,2.558,2.964,2.558,.147,0,.296-.011,.445-.033,1.639-.244,2.77-1.77,2.526-3.408Z"
                          fill="#333854"
                        />
                      </g>
                      <path
                        d="M197,195.067c-5-3.067,5.667-33.606,18-25.067,13,9-12.578,28.394-18,25.067Z"
                        fill="#e9c399"
                      />
                    </svg>'
                ></IconBox>
              </b-col>
              <b-col md="6">
                <IconBox
                  label="Kostenloses WLAN"
                  icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                      <path
                        d="M159.079,241.957c30.439,37.846,68.547,74.36,81.622,86.589l58.483-33.174c-2.816-13.031-9.573-42.649-19.39-75.255-.737-.048-1.455-.072-2.151-.072-13.729,0-18.488,8.752-24.696,23.167-4.63,10.753-22.131,30.491-42.948,22.788-27.938-10.337-28.27-33.203-22-43,16-25-15-33-28-10-3.101,5.486-5,17-.921,28.957Z"
                        fill="#e9c399"
                      />
                      <g>
                        <path
                          d="M294.636,227.914c-14.824-51.753-30.324-89.331-46.071-111.716-.44-.83-1.254-1.425-2.219-1.565l-49.256-7.132-39.156-45.245c-.638-.735-1.578-1.112-2.562-1.022-.605,.06-14.939,1.512-23.897,6.594s-17.561,16.639-17.922,17.128c-.579,.783-.742,1.798-.437,2.723l18.742,56.823-19.154,45.937c-.016,.038-.024,.078-.038,.116-.025,.068-.047,.136-.067,.205-.029,.098-.051,.197-.069,.296-.012,.067-.024,.133-.032,.2-.012,.109-.016,.218-.016,.328,0,.06-.004,.119,0,.18,.01,.168,.03,.335,.068,.499,.003,.012,.008,.023,.01,.034,.038,.159,.091,.313,.155,.464,.006,.015,.008,.03,.015,.044,11.061,25.047,35.421,57.757,72.406,97.221,27.46,29.301,52.025,51.595,52.271,51.816,.565,.513,1.287,.776,2.015,.776,.507,0,1.017-.128,1.479-.391l69.928-39.666c1.126-.639,1.715-1.927,1.462-3.196-.065-.324-6.595-32.849-17.653-71.453ZM134.436,73.046c6.284-3.565,16.23-5.159,20.004-5.658l36.45,42.118-54.129,30.704-17.447-52.896c2.365-2.983,8.837-10.702,15.122-14.267Zm2.996,73.681l29.354-16.651,29.354-16.651,40.675,5.89-46.141,26.173-69.06,39.173,15.818-37.935Zm102.406,189.207c-12.545-11.57-95.134-88.941-120.498-143.084l125.649-71.273c33.457,49.553,57.485,160.14,60.979,176.845l-66.13,37.512Z"
                          fill="#333854"
                        />
                        <path
                          d="M69.854,180.462c-.188-1.647-1.688-2.829-3.32-2.64-1.646,.188-2.829,1.675-2.641,3.321,6.357,55.689,58.102,100.151,60.301,102.016,.563,.479,1.253,.712,1.938,.712,.851,0,1.695-.36,2.289-1.06,1.072-1.263,.917-3.155-.346-4.228-.521-.442-52.137-44.822-58.222-98.122Z"
                          fill="#333854"
                        />
                        <path
                          d="M322.968,184.304c-.107-.717-2.693-17.807-9.816-39.549-11.968-36.532-27.144-56.568-37.767-66.943-1.184-1.157-3.083-1.134-4.242,.05-1.157,1.186-1.135,3.085,.051,4.242,35.257,34.434,45.737,102.4,45.839,103.083,.223,1.489,1.503,2.558,2.964,2.558,.147,0,.296-.011,.445-.033,1.639-.244,2.77-1.77,2.526-3.408Z"
                          fill="#333854"
                        />
                      </g>
                      <path
                        d="M197,195.067c-5-3.067,5.667-33.606,18-25.067,13,9-12.578,28.394-18,25.067Z"
                        fill="#e9c399"
                      />
                    </svg>'
                ></IconBox>
              </b-col>
              <b-col md="6">
                <IconBox
                  label="Monteurspreise"
                  icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                      <path
                        d="M159.079,241.957c30.439,37.846,68.547,74.36,81.622,86.589l58.483-33.174c-2.816-13.031-9.573-42.649-19.39-75.255-.737-.048-1.455-.072-2.151-.072-13.729,0-18.488,8.752-24.696,23.167-4.63,10.753-22.131,30.491-42.948,22.788-27.938-10.337-28.27-33.203-22-43,16-25-15-33-28-10-3.101,5.486-5,17-.921,28.957Z"
                        fill="#e9c399"
                      />
                      <g>
                        <path
                          d="M294.636,227.914c-14.824-51.753-30.324-89.331-46.071-111.716-.44-.83-1.254-1.425-2.219-1.565l-49.256-7.132-39.156-45.245c-.638-.735-1.578-1.112-2.562-1.022-.605,.06-14.939,1.512-23.897,6.594s-17.561,16.639-17.922,17.128c-.579,.783-.742,1.798-.437,2.723l18.742,56.823-19.154,45.937c-.016,.038-.024,.078-.038,.116-.025,.068-.047,.136-.067,.205-.029,.098-.051,.197-.069,.296-.012,.067-.024,.133-.032,.2-.012,.109-.016,.218-.016,.328,0,.06-.004,.119,0,.18,.01,.168,.03,.335,.068,.499,.003,.012,.008,.023,.01,.034,.038,.159,.091,.313,.155,.464,.006,.015,.008,.03,.015,.044,11.061,25.047,35.421,57.757,72.406,97.221,27.46,29.301,52.025,51.595,52.271,51.816,.565,.513,1.287,.776,2.015,.776,.507,0,1.017-.128,1.479-.391l69.928-39.666c1.126-.639,1.715-1.927,1.462-3.196-.065-.324-6.595-32.849-17.653-71.453ZM134.436,73.046c6.284-3.565,16.23-5.159,20.004-5.658l36.45,42.118-54.129,30.704-17.447-52.896c2.365-2.983,8.837-10.702,15.122-14.267Zm2.996,73.681l29.354-16.651,29.354-16.651,40.675,5.89-46.141,26.173-69.06,39.173,15.818-37.935Zm102.406,189.207c-12.545-11.57-95.134-88.941-120.498-143.084l125.649-71.273c33.457,49.553,57.485,160.14,60.979,176.845l-66.13,37.512Z"
                          fill="#333854"
                        />
                        <path
                          d="M69.854,180.462c-.188-1.647-1.688-2.829-3.32-2.64-1.646,.188-2.829,1.675-2.641,3.321,6.357,55.689,58.102,100.151,60.301,102.016,.563,.479,1.253,.712,1.938,.712,.851,0,1.695-.36,2.289-1.06,1.072-1.263,.917-3.155-.346-4.228-.521-.442-52.137-44.822-58.222-98.122Z"
                          fill="#333854"
                        />
                        <path
                          d="M322.968,184.304c-.107-.717-2.693-17.807-9.816-39.549-11.968-36.532-27.144-56.568-37.767-66.943-1.184-1.157-3.083-1.134-4.242,.05-1.157,1.186-1.135,3.085,.051,4.242,35.257,34.434,45.737,102.4,45.839,103.083,.223,1.489,1.503,2.558,2.964,2.558,.147,0,.296-.011,.445-.033,1.639-.244,2.77-1.77,2.526-3.408Z"
                          fill="#333854"
                        />
                      </g>
                      <path
                        d="M197,195.067c-5-3.067,5.667-33.606,18-25.067,13,9-12.578,28.394-18,25.067Z"
                        fill="#e9c399"
                      />
                    </svg>'
                ></IconBox>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="my-5">
          <b-col v-for="room in rooms" :key="room">
            <b-card
              :title="room.title"
              :sub-title="room.price"
              bg-variant="light"
              class="shadow"
            >
              <b-card-text v-if="room.description"
                >{{ room.description }}
              </b-card-text>
              <b-button
                v-if="room.booking"
                :href="room.booking"
                variant="primary"
                >Buchen</b-button
              >
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container>
        <b-row class="mb-5">
          <b-col md="5">
            <h2>Unsere Ferienwohnungen</h2>
            <p>
              Die Schwäbische Alb ist als Ferienziel für Familien beliebt und
              hat enorm viel zu bieten. Unsere komfortablen Ferienwohnungen sind
              ein idealer Ausgangspunkt für Ausflüge und Erkundungen aller Art.
            </p>
            <p>
              In unserem Garten befindet sich ein großes Spiel- und
              Klettergerüst für unsere kleinen Gäste. Er bietet unseren Gästen
              Platz zum Grillen und Sonnen. In unmittelbarer Nähe unseres
              Grundstücks gibt es einen großzügigen Motorik-Spielplatz mit
              angeschlossenem Bolzplatz.
            </p>
            <p>
              Neben unseren Gästezimmern, sowie im Keller vom Gebäude der
              Ferienwohnungen "Am Pfarrgarten 23" stehen Ihnen Waschmaschinen
              und Trockner mit Münzeinwurf zur Verfügung. In Wohnung Nr. 1 gibt
              es eine Waschmaschine mit Münzeinwurf.
            </p>
          </b-col>
        </b-row>

        <b-tabs
          content-class="mt-5"
          no-nav-style
          lazy
          justified
          active-nav-item-class="border-primary"
        >
          <b-tab
            title-item-class="me-2 mb-2 bg-light"
            title-link-class="p-0 h-100 border border-5 rounded-xl overflow-hidden text-decoration-none"
            v-for="location in locations"
            :key="location"
          >
            <template #title>
              <b-card
                :title="location.title"
                text-variant="dark"
                bg-variant="light"
                class="rounded-0"
                header-class="p-0"
              >
                <template #header>
                  <div
                    :style="
                      location.images
                        ? 'background: no-repeat center url(' +
                          location.images[0] +
                          '); background-size: cover;'
                        : 'background-color: red;'
                    "
                    style="height: 200px"
                  ></div>
                </template>
                <b-card-text class="fs-6 text-muted" v-if="location.apartments">
                  {{ location.apartments.length }}
                  {{
                    location.apartments.length === 1
                      ? "Ferienwohnung"
                      : "Ferienwohnungen"
                  }}
                </b-card-text>
              </b-card>
            </template>
            <ul class="list-group list-group-flush">
              <li
                v-for="apartmentPath in location.apartments"
                :key="apartmentPath"
                class="list-group-item bg-white py-5"
              >
                <b-row class="align-items-center">
                  <b-col md="6">
                    <b-img
                      src="https://picsum.photos/600/500/?image=27"
                      fluid
                      class="mb-3 mb-md-0 rounded-xl"
                    ></b-img>
                  </b-col>
                  <b-col md="6">
                    <h4 v-if="(apartment = getApartment(apartmentPath).title)">
                      {{ apartment }}
                    </h4>
                    <b-card-text
                      v-if="
                        (description = getApartment(apartmentPath).description)
                      "
                      v-html="$md.render(description)"
                    ></b-card-text>
                  </b-col>
                </b-row>
                <b-row class="justify-content-end">
                  <b-col cols="auto"
                    ><b-btn
                      v-if="(booking = getApartment(apartmentPath).booking)"
                      :href="booking"
                      variant="primary"
                      >Wohnung buchen</b-btn
                    ></b-col
                  >
                </b-row>
              </li>
            </ul>
          </b-tab>
        </b-tabs>
      </b-container>
    </section>
    <section class="bg-secondary opacity-25">
      <h1>OLD STUFF:</h1>
      <b-container>
        <b-row class="align-items-center bg-primary text-light">
          <b-col
            md="6"
            class="align-self-stretch"
            style="
              background-image: url(https://picsum.photos/800/600);
              background-position: center;
            "
          >
          </b-col>
          <b-col md="6" class="p-5">
            <h3>Am Pfarrgarten 23</h3>
            <p>
              In dem neuen Gebäude von 2014 befinden sich großzügige, modern und
              zeitlos eingerichtete Wohnungen mit vollwertigen Küchen im Wohn-
              und Essbereich. Die Schlafzimmern haben Einzelbetten die
              verbindbar sind. Alle Wohnungen sind mit einem Bad ausgestattet
              mit bodentiefer Dusche, WC und Waschgelegenheit. Jede Wohnung
              verfügt über eigenen Balkon mit Sitzgelegenheit.
            </p>
            <p>
              In allen Wohnungen finden Sie einen Sat-Flat TV und eine
              Ministereoanlage. Die Küchen sind voll ausgestattet, unter anderem
              mit Kaffeemaschine, Mikrowelle, Wasserkocher, Töpfen und
              ausreichend Geschirr und Besteck.
            </p>
            <p>Die Wohnungen sind sehr ruhig gelegen mit Blick ins Grüne.</p>
          </b-col>
        </b-row>
        <b-row class="pt-5">
          <b-col v-for="apartment in apartments" :key="apartment.title" md="4">
            <b-card
              :title="apartment.title"
              :img-src="'https://picsum.photos/800/600?random=' + Math.random()"
              img-alt="Card image"
              img-top
              header-tag="header"
              header-bg-variant="white"
              class="shadow"
            >
              <template #header>
                <div class="mt-3 d-flex">
                  <div class="me-5">
                    <span>👥</span><span class="ms-2">5</span>
                  </div>
                  <div class="me-5">
                    <span>👥</span><span class="ms-2">5</span>
                  </div>
                </div>
              </template>
              <b-card-text>{{ apartment.description }}</b-card-text>
              <b-button href="#!" variant="secondary">Buchen</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  async asyncData({ $content, params }) {
    try {
      const locations = await $content("locations")
        .where({ apartments: { $type: "array" } })
        .sortBy("createdAt", "desc")
        .fetch();
      const apartments = await $content("wohnungen")
        .sortBy("createdAt", "desc")
        .fetch();
      const rooms = await $content("zimmer").fetch();
      return { apartments, locations, rooms };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    getApartment(path) {
      return this.apartments.find(
        (apartment) => "content" + apartment.path + apartment.extension === path
      );
    },
  },
};
</script>
