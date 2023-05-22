const timeoutInMilliseconds = 60000;

function catchError(response: Response) {
  return response.text().then((str) => {
    let parsed;

    try {
      parsed = JSON.parse(str);
    } catch (e) {
      parsed = str;
    }

    if (typeof parsed === 'string') {
      parsed = {
        error: parsed
      };
    }

    return {
      response,
      ...{ ok: false, parsedBody: parsed }
    };
  });
}

function createRequestAbortionTimer(controller: AbortController, milliseconds: number, path: string) {
  return setTimeout(() => {
    controller.abort();
    console.log('Abort', {
      path
    });
  }, milliseconds);
}

function createFetchPromise(path: string): Promise<Response> {
  return fetch(buildShellBasApiUrl(path));
}

export function buildShellBasApiUrl(path: string) {
  const baseUrl = `${window.location.origin}/api/bas${path}`;

  const appendOrNewQueryString = path.indexOf('?') >= 0 ? '&' : '?';
  const requiredQueryString = `${appendOrNewQueryString}preventCache=${new Date().getTime().toString()}`;
  return encodeURI(baseUrl + requiredQueryString);
}

export const fetchBookingApi = async (path: string) => {
  const abortController = new AbortController();
  const requestOptions: RequestInit = {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json'
    },
    signal: abortController.signal
  };
  const timerId = createRequestAbortionTimer(abortController, timeoutInMilliseconds, path);

  try {
    const response = await createFetchPromise(path);
    clearTimeout(timerId);
    if (!response.ok) {
      throw response;
    }
    const json = await response.json();
    return {
      response: json,
      ok: true
    };
  } catch (error: any) {
    return catchError(error);
  }
};
