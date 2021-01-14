<template>
  <div :class="dark == 'false' ? 'theme-dark' : 'theme-light'">
    <div
      class="flex h-screen bg-gray-50 dark:bg-gray-900"
      :class="{ 'overflow-hidden': isSideMenuOpen }"
    >
      <!-- Desktop sidebar -->
      <aside
        class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
      >
        <div class="py-4 text-gray-500 dark:text-gray-400">
          <a
            class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            href="#"
          >
            LACK
          </a>
          <ul class="mt-6">
            <li class="relative px-6 py-3">
              <span
                class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                href="index.html"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span class="ml-4">LACK-4</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <!-- Mobile sidebar -->
      <!-- Backdrop -->
      <transition
        enter-active-class="transition ease-in-out duration-150"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-150"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isSideMenuOpen"
          class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
        ></div>
      </transition>
      <transition
        enter-active-class="transition ease-in-out duration-150"
        enter-class="opacity-0 transform -translate-x-20"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-150"
        leave-class="opacity-100"
        leave-to-class="opacity-0 transform -translate-x-20"
      >
        <aside
          v-show="isSideMenuOpen"
          class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        >
          <div class="py-4 text-gray-500 dark:text-gray-400">
            <a
              class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
              href="#"
            >
              Cukai
            </a>
            <ul class="mt-6">
              <li class="relative px-6 py-3">
                <span
                  class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
                <a
                  class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                  href="index.html"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                  <span class="ml-4">LACK-4</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </transition>

      <div class="flex flex-col flex-1 w-full">
        <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div
            class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
          >
            <!-- Mobile hamburger -->
            <button
              class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              @click="toggleSideMenu"
              aria-label="Menu"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <!-- Search input -->
            <div class="flex justify-center flex-1 lg:mr-32">
              <div
                class="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
              >
                <div class="absolute inset-y-0 flex items-center pl-2">
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
            <ul class="flex items-center flex-shrink-0 space-x-6">
              <!-- Theme toggler -->
              <li class="flex">
                <button
                  class="rounded-md focus:outline-none focus:shadow-outline-purple"
                  @click="toggleTheme"
                  aria-label="Toggle color mode"
                >
                  <div v-if="dark === 'true'">
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div v-else>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </header>
        <main class="h-full pb-16 overflow-y-auto">
          <div class="container px-6 mx-auto grid">
            <h2
              class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
              LACK-4
            </h2>
            <div
              class="px-4 py-3 mb-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <h4 class="mb-5 font-semibold text-gray-600 dark:text-gray-300">
                Periode Pelaporan
              </h4>
              <div class="grid md:grid-cols-2">
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Bulan</span>
                    <select
                      class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    >
                      <option>Januari</option>
                    </select>
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Tahun</span>
                    <select
                      class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    >
                      <option>2021</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <div
              class="px-4 py-3 mb-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <h4 class="mb-5 font-semibold text-gray-600 dark:text-gray-300">
                Pengguna
              </h4>
              <div class="grid md:grid-cols-2">
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Nama Perusahaan</span
                    >
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                      value="PT Sidomuncul"
                      disabled
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">NPPP</span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                      value="123/BC/2021"
                      disabled
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Alamat</span>
                    <textarea
                      class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                      rows="3"
                      disabled
                    >
Jalan A. Yani Nomor 1, Semarang</textarea
                    >
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">KPPBC</span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                      value="KPPBC Tipe Madya Pabean A Semarang"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div
              class="px-4 py-3 mb-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <h4 class="mb-5 font-semibold text-gray-600 dark:text-gray-300">
                Pemasok
              </h4>
              <div class="grid md:grid-cols-2">
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                      Nama Perusahaan
                    </span>
                    <div
                      class="relative text-gray-500 focus-within:text-purple-600"
                    >
                      <input
                        class="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                      />
                      <button
                        class="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                      >
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">NPPBKC</span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Alamat</span>
                    <textarea
                      class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                      rows="3"
                    ></textarea>
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">KPPBC</span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div
              class="px-4 py-3 mb-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <h4 class="mb-5 font-semibold text-gray-600 dark:text-gray-300">
                Saldo dan Pemasukan EA
              </h4>
              <div class="grid md:grid-cols-2">
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Saldo Awal EA</span
                    >
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      (liter)
                    </span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                      Pemasukan EA
                    </span>
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      (liter)
                    </span>
                    <div
                      class="relative text-gray-500 focus-within:text-purple-600"
                    >
                      <input
                        class="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                      />
                      <button
                        class="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                      >
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Jumlah EA</span
                    >
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      (liter)
                    </span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                      value="Rumus. Field tidak bisa diinputkan angka"
                      disabled
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Total EA yang Digunakan untuk Semua Jenis BHA</span
                    >
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      (liter)
                    </span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                      value="Ambil value dari total akumulasi penggunaan EA per jenis BHA. Field tidak bisa diinputkan angka"
                      disabled
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Saldo Akhir EA</span
                    >
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      (liter)
                    </span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                      value="Rumus. Field tidak bisa diinputkan angka"
                      disabled
                    />
                  </label>
                </div>
              </div>
              <h4
                class="mt-5 mb-5 font-semibold text-gray-600 dark:text-gray-300"
              >
                Rincian BHA dan Penggunaan EA
              </h4>
              <div class="grid md:grid-cols-2">
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Jenis Barang yang Diproduksi</span
                    >
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Satuan Barang yang Diproduksi</span
                    >
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Jumlah Barang yang Diproduksi</span
                    >
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                      Penggunaan EA per Jenis Barang yang Diproduksi
                    </span>
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      (liter)
                    </span>
                    <input
                      class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    />
                  </label>
                </div>
                <div class="p-3 pt-0">
                  <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400"
                      >Keterangan</span
                    >
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      (dapat diisi dengan jenis bahan EA pencampur, misal: EA
                      murni)
                    </span>
                    <textarea
                      class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                      rows="3"
                      disabled
                    ></textarea>
                  </label>
                </div>
              </div>

              <div class="flex justify-center">
                <div class="m-2">
                  <button
                    class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Simpan
                  </button>
                </div>
                <div class="m-2">
                  <button
                    class="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                    >
                      <th class="px-4 py-3">Jenis BHA</th>
                      <th class="px-4 py-3">Saldo Awal</th>
                      <th class="px-4 py-3">Pemasukan</th>
                      <th class="px-4 py-3">Jumlah</th>
                      <th class="px-4 py-3">Yang Digunakan</th>
                      <th class="px-4 py-3">Saldo Akhir</th>
                      <th class="px-4 py-3">Jumlah BHA</th>
                      <th class="px-4 py-3">Satuan</th>
                      <th class="px-4 py-3">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs">1.000</td>
                      <td class="px-4 py-3 text-xs">500</td>
                      <td class="px-4 py-3 text-xs">1.500</td>
                      <td class="px-4 py-3 text-xs">700</td>
                      <td class="px-4 py-3 text-xs">800</td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs"></td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3 text-xs">Hand Sanitizer Spray</td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs">300</td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs">3.000</td>
                      <td class="px-4 py-3 text-xs">liter</td>
                      <td class="px-4 py-3 text-xs">EA murni</td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3 text-xs">Hand Gel</td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs">400</td>
                      <td class="px-4 py-3 text-xs"></td>
                      <td class="px-4 py-3 text-xs">4.000</td>
                      <td class="px-4 py-3 text-xs">liter</td>
                      <td class="px-4 py-3 text-xs">EA murni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>

<script>
export default {
  data() {
    return {
      isPagesMenuOpen: false,
      isSideMenuOpen: false,
      isNotificationsMenuOpen: false,
      isProfileMenuOpen: false,
      dark: process.isClient ? !localStorage.getItem("dark") : false,
    };
  },
  methods: {
    toggleTheme() {
      if (this.dark == "true") {
        this.dark = "false";
        localStorage.setItem("dark", "false");
      } else {
        this.dark = "true";
        localStorage.setItem("dark", "true");
      }
    },
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
    closeSideMenu() {
      this.isSideMenuOpen = false;
    },
    toggleNotificationsMenu() {
      this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false;
    },
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false;
    },
    togglePagesMenu() {
      this.isPagesMenuOpen = !this.isPagesMenuOpen;
    },
  },
};
</script>
