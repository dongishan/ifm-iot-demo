/*
* Author: Gishan Don Ranasinghe
* Organisation: University of Cambridge
*/

var timestampsHistorical = ["01/05/2018 00:00","01/05/2018 01:00","01/05/2018 02:00","01/05/2018 03:00","01/05/2018 04:00","01/05/2018 05:00","01/05/2018 06:00","01/05/2018 07:00","01/05/2018 08:00","01/05/2018 09:00","01/05/2018 10:00","01/05/2018 11:00","01/05/2018 12:00","01/05/2018 13:00","01/05/2018 14:00","01/05/2018 15:00","01/05/2018 16:00","01/05/2018 17:00","01/05/2018 18:00","01/05/2018 19:00","01/05/2018 20:00","01/05/2018 21:00","01/05/2018 22:00","01/05/2018 23:00","02/05/2018 00:00","02/05/2018 01:00","02/05/2018 02:00","02/05/2018 03:00","02/05/2018 04:00","02/05/2018 05:00","02/05/2018 06:00","02/05/2018 07:00","02/05/2018 08:00","02/05/2018 09:00","02/05/2018 10:00","02/05/2018 11:00","02/05/2018 12:00","02/05/2018 13:00","02/05/2018 14:00","02/05/2018 15:00","02/05/2018 16:00","02/05/2018 17:00","02/05/2018 18:00","02/05/2018 19:00","02/05/2018 20:00","02/05/2018 21:00","02/05/2018 22:00","02/05/2018 23:00","03/05/2018 00:00","03/05/2018 01:00","03/05/2018 02:00","03/05/2018 03:00","03/05/2018 04:00","03/05/2018 05:00","03/05/2018 06:00","03/05/2018 07:00","03/05/2018 08:00","03/05/2018 09:00","03/05/2018 10:00","03/05/2018 11:00","03/05/2018 12:00","03/05/2018 13:00","03/05/2018 14:00","03/05/2018 15:00","03/05/2018 16:00","03/05/2018 17:00","03/05/2018 18:00","03/05/2018 19:00","03/05/2018 20:00","03/05/2018 21:00","03/05/2018 22:00","03/05/2018 23:00","04/05/2018 00:00","04/05/2018 01:00","04/05/2018 02:00","04/05/2018 03:00","04/05/2018 04:00","04/05/2018 05:00","04/05/2018 06:00","04/05/2018 07:00","04/05/2018 08:00","04/05/2018 09:00","04/05/2018 10:00","04/05/2018 11:00","04/05/2018 12:00","04/05/2018 13:00","04/05/2018 14:00","04/05/2018 15:00","04/05/2018 16:00","04/05/2018 17:00","04/05/2018 18:00","04/05/2018 19:00","04/05/2018 20:00","04/05/2018 21:00","04/05/2018 22:00","04/05/2018 23:00","05/05/2018 00:00","05/05/2018 01:00","05/05/2018 02:00","05/05/2018 03:00","05/05/2018 03:59","05/05/2018 04:59","05/05/2018 05:59","05/05/2018 06:59","05/05/2018 07:59","05/05/2018 08:59","05/05/2018 09:59","05/05/2018 10:59","05/05/2018 11:59","05/05/2018 12:59","05/05/2018 13:59","05/05/2018 14:59","05/05/2018 15:59","05/05/2018 16:59","05/05/2018 17:59","05/05/2018 18:59","05/05/2018 19:59","05/05/2018 20:59","05/05/2018 21:59","05/05/2018 22:59","05/05/2018 23:59","06/05/2018 00:59","06/05/2018 01:59","06/05/2018 02:59","06/05/2018 03:59","06/05/2018 04:59","06/05/2018 05:59","06/05/2018 06:59","06/05/2018 07:59","06/05/2018 08:59","06/05/2018 09:59","06/05/2018 10:59","06/05/2018 11:59","06/05/2018 12:59","06/05/2018 13:59","06/05/2018 14:59","06/05/2018 15:59","06/05/2018 16:59","06/05/2018 17:59","06/05/2018 18:59","06/05/2018 19:59","06/05/2018 20:59","06/05/2018 21:59","06/05/2018 22:59","06/05/2018 23:59","05/06/2018 00:59","05/06/2018 01:59","05/06/2018 02:59","05/06/2018 03:59","05/06/2018 04:59","05/06/2018 05:59","05/06/2018 06:59","05/06/2018 07:59","05/06/2018 08:59","05/06/2018 09:59","05/06/2018 10:59","05/06/2018 11:59","05/06/2018 12:59","05/06/2018 13:59","05/06/2018 14:59","05/06/2018 15:59","05/06/2018 16:59","05/06/2018 17:59","05/06/2018 18:59","05/06/2018 19:59","05/06/2018 20:59","05/06/2018 21:59","05/06/2018 22:59","05/06/2018 23:59","05/06/2018 00:59","05/06/2018 01:59","05/06/2018 02:59","05/06/2018 03:59","05/06/2018 04:59","05/06/2018 05:59","05/06/2018 06:59","05/06/2018 07:59","05/06/2018 08:59","05/06/2018 09:59","05/06/2018 10:59","05/06/2018 11:59","05/06/2018 12:59","05/06/2018 13:59","05/06/2018 14:59","05/06/2018 15:59","05/06/2018 16:59","05/06/2018 17:59","05/06/2018 18:59","05/06/2018 19:59","05/06/2018 20:59","05/06/2018 21:59","05/06/2018 22:59","05/06/2018 23:59","09/05/2018 00:59","09/05/2018 01:59","09/05/2018 02:59","09/05/2018 03:59","09/05/2018 04:59","09/05/2018 05:59","09/05/2018 06:59","09/05/2018 07:59","09/05/2018 08:59","09/05/2018 09:59","09/05/2018 10:59","09/05/2018 11:59","09/05/2018 12:59","09/05/2018 13:59","09/05/2018 14:59","09/05/2018 15:59","09/05/2018 16:59","09/05/2018 17:59","09/05/2018 18:59","09/05/2018 19:59","09/05/2018 20:59","09/05/2018 21:59","09/05/2018 22:59","09/05/2018 23:59","10/05/2018 00:59","10/05/2018 01:59","10/05/2018 02:59","10/05/2018 03:59","10/05/2018 04:59","10/05/2018 05:59","10/05/2018 06:59","10/05/2018 07:59","10/05/2018 08:59","10/05/2018 09:59","10/05/2018 10:59","10/05/2018 11:59","10/05/2018 12:59","10/05/2018 13:59","10/05/2018 14:59","10/05/2018 15:59","10/05/2018 16:59","10/05/2018 17:59","10/05/2018 18:59","10/05/2018 19:59","10/05/2018 20:59","10/05/2018 21:59","10/05/2018 22:59","10/05/2018 23:59","11/05/2018 00:59","11/05/2018 01:59","11/05/2018 02:59","11/05/2018 03:59","11/05/2018 04:59","11/05/2018 05:59","11/05/2018 06:59","11/05/2018 07:59","11/05/2018 08:59","11/05/2018 09:59","11/05/2018 10:59","11/05/2018 11:59","11/05/2018 12:59","11/05/2018 13:59","11/05/2018 14:59","11/05/2018 15:59","11/05/2018 16:59","11/05/2018 17:59","11/05/2018 18:59","11/05/2018 19:59","11/05/2018 20:59","11/05/2018 21:59","11/05/2018 22:59","11/05/2018 23:59","12/05/2018 00:59","12/05/2018 01:59","12/05/2018 02:59","12/05/2018 03:59","12/05/2018 04:59","12/05/2018 05:59","12/05/2018 06:59","12/05/2018 07:59","12/05/2018 08:59","12/05/2018 09:59","12/05/2018 10:59","12/05/2018 11:59","12/05/2018 12:59","12/05/2018 13:59","12/05/2018 14:59","12/05/2018 15:59","12/05/2018 16:59","12/05/2018 17:59","12/05/2018 18:59","12/05/2018 19:59","12/05/2018 20:59","12/05/2018 21:59","12/05/2018 22:59","12/05/2018 23:59","13/05/2018 00:59","13/05/2018 01:59","13/05/2018 02:59","13/05/2018 03:59","13/05/2018 04:59","13/05/2018 05:59","13/05/2018 06:59","13/05/2018 07:59","13/05/2018 08:59","13/05/2018 09:59","13/05/2018 10:59","13/05/2018 11:59","13/05/2018 12:59","13/05/2018 13:59","13/05/2018 14:59","13/05/2018 15:59","13/05/2018 16:59","13/05/2018 17:59","13/05/2018 18:59","13/05/2018 19:59","13/05/2018 20:59","13/05/2018 21:59","13/05/2018 22:59","13/05/2018 23:59","14/05/2018 00:59","14/05/2018 01:59","14/05/2018 02:59","14/05/2018 03:59","14/05/2018 04:59","14/05/2018 05:59","14/05/2018 06:59","14/05/2018 07:59","14/05/2018 08:59","14/05/2018 09:59","14/05/2018 10:59","14/05/2018 11:59","14/05/2018 12:59","14/05/2018 13:59","14/05/2018 14:59","14/05/2018 15:59","14/05/2018 16:59","14/05/2018 17:59","14/05/2018 18:59","14/05/2018 19:59","14/05/2018 20:59","14/05/2018 21:59","14/05/2018 22:59","14/05/2018 23:59","15/05/2018 00:59","15/05/2018 01:59","15/05/2018 02:59","15/05/2018 03:59","15/05/2018 04:59","15/05/2018 05:59","15/05/2018 06:59","15/05/2018 07:59","15/05/2018 08:59","15/05/2018 09:59","15/05/2018 10:59","15/05/2018 11:59","15/05/2018 12:59","15/05/2018 13:59","15/05/2018 14:59","15/05/2018 15:59","15/05/2018 16:59","15/05/2018 17:59","15/05/2018 18:59","15/05/2018 19:59","15/05/2018 20:59","15/05/2018 21:59","15/05/2018 22:59","15/05/2018 23:59","16/05/2018 00:59","16/05/2018 01:59","16/05/2018 02:59","16/05/2018 03:59","16/05/2018 04:59","16/05/2018 05:59","16/05/2018 06:59","16/05/2018 07:59","16/05/2018 08:59","16/05/2018 09:59","16/05/2018 10:59","16/05/2018 11:59","16/05/2018 12:59","16/05/2018 13:59","16/05/2018 14:59","16/05/2018 15:59","16/05/2018 16:59","16/05/2018 17:59","16/05/2018 18:59","16/05/2018 19:59","16/05/2018 20:59","16/05/2018 21:59","16/05/2018 22:59","16/05/2018 23:59","17/05/2018 00:59","17/05/2018 01:59","17/05/2018 02:59","17/05/2018 03:59","17/05/2018 04:59","17/05/2018 05:59","17/05/2018 06:59","17/05/2018 07:59","17/05/2018 08:59","17/05/2018 09:59","17/05/2018 10:59","17/05/2018 11:59","17/05/2018 12:59","17/05/2018 13:59","17/05/2018 14:59","17/05/2018 15:59","17/05/2018 16:59","17/05/2018 17:59","17/05/2018 18:59","17/05/2018 19:59","17/05/2018 20:59","17/05/2018 21:59","17/05/2018 22:59","17/05/2018 23:59","18/05/2018 00:59","18/05/2018 01:59","18/05/2018 02:59","18/05/2018 03:59","18/05/2018 04:59","18/05/2018 05:59","18/05/2018 06:59","18/05/2018 07:59","18/05/2018 08:59","18/05/2018 09:59","18/05/2018 10:59","18/05/2018 11:59","18/05/2018 12:59","18/05/2018 13:59","18/05/2018 14:59","18/05/2018 15:59","18/05/2018 16:59","18/05/2018 17:59","18/05/2018 18:59","18/05/2018 19:59","18/05/2018 20:59","18/05/2018 21:59","18/05/2018 22:59","18/05/2018 23:59","19/05/2018 00:59","19/05/2018 01:59","19/05/2018 02:59","19/05/2018 03:59","19/05/2018 04:59","19/05/2018 05:59","19/05/2018 06:59","19/05/2018 07:59","19/05/2018 08:59","19/05/2018 09:59","19/05/2018 10:59","19/05/2018 11:59","19/05/2018 12:59","19/05/2018 13:59","19/05/2018 14:59","19/05/2018 15:59","19/05/2018 16:59","19/05/2018 17:59","19/05/2018 18:59","19/05/2018 19:59","19/05/2018 20:59","19/05/2018 21:59","19/05/2018 22:59","19/05/2018 23:59","20/05/2018 00:59","20/05/2018 01:59","20/05/2018 02:59","20/05/2018 03:59","20/05/2018 04:59","20/05/2018 05:59","20/05/2018 06:59","20/05/2018 07:59","20/05/2018 08:59","20/05/2018 09:59","20/05/2018 10:59","20/05/2018 11:59","20/05/2018 12:59","20/05/2018 13:59","20/05/2018 14:59","20/05/2018 15:59","20/05/2018 16:59","20/05/2018 17:59","20/05/2018 18:59","20/05/2018 19:59","20/05/2018 20:59","20/05/2018 21:59","20/05/2018 22:59","20/05/2018 23:59","21/05/2018 00:59","21/05/2018 01:59","21/05/2018 02:59","21/05/2018 03:59","21/05/2018 04:59","21/05/2018 05:59","21/05/2018 06:59","21/05/2018 07:59","21/05/2018 08:59","21/05/2018 09:59","21/05/2018 10:59","21/05/2018 11:59","21/05/2018 12:59","21/05/2018 13:59","21/05/2018 14:59","21/05/2018 15:59","21/05/2018 16:59","21/05/2018 17:59","21/05/2018 18:59","21/05/2018 19:59","21/05/2018 20:59","21/05/2018 21:59","21/05/2018 22:59","21/05/2018 23:59","22/05/2018 00:59","22/05/2018 01:59","22/05/2018 02:59","22/05/2018 03:59","22/05/2018 04:59","22/05/2018 05:59","22/05/2018 06:59","22/05/2018 07:59","22/05/2018 08:59","22/05/2018 09:59","22/05/2018 10:59","22/05/2018 11:59","22/05/2018 12:59","22/05/2018 13:59","22/05/2018 14:59","22/05/2018 15:59","22/05/2018 16:59","22/05/2018 17:59","22/05/2018 18:59","22/05/2018 19:59","22/05/2018 20:59","22/05/2018 21:59","22/05/2018 22:59","22/05/2018 23:59","23/05/2018 00:59","23/05/2018 01:59","23/05/2018 02:59","23/05/2018 03:59","23/05/2018 04:59","23/05/2018 05:59","23/05/2018 06:59","23/05/2018 07:59","23/05/2018 08:59","23/05/2018 09:59","23/05/2018 10:59","23/05/2018 11:59","23/05/2018 12:59","23/05/2018 13:59","23/05/2018 14:59","23/05/2018 15:59","23/05/2018 16:59","23/05/2018 17:59","23/05/2018 18:59","23/05/2018 19:59","23/05/2018 20:59","23/05/2018 21:59","23/05/2018 22:59","23/05/2018 23:59","24/05/2018 00:59","24/05/2018 01:59","24/05/2018 02:59","24/05/2018 03:59","24/05/2018 04:59","24/05/2018 05:59","24/05/2018 06:59","24/05/2018 07:59","24/05/2018 08:59","24/05/2018 09:59","24/05/2018 10:59","24/05/2018 11:59","24/05/2018 12:59","24/05/2018 13:59","24/05/2018 14:59","24/05/2018 15:59","24/05/2018 16:59","24/05/2018 17:59","24/05/2018 18:59","24/05/2018 19:59","24/05/2018 20:59","24/05/2018 21:59","24/05/2018 22:59","24/05/2018 23:59","25/05/2018 00:59","25/05/2018 01:59","25/05/2018 02:59","25/05/2018 03:59","25/05/2018 04:59","25/05/2018 05:59","25/05/2018 06:59","25/05/2018 07:59","25/05/2018 08:59","25/05/2018 09:59","25/05/2018 10:59","25/05/2018 11:59","25/05/2018 12:59","25/05/2018 13:59","25/05/2018 14:59","25/05/2018 15:59","25/05/2018 16:59","25/05/2018 17:59","25/05/2018 18:59","25/05/2018 19:59","25/05/2018 20:59","25/05/2018 21:59","25/05/2018 22:59","25/05/2018 23:59","26/05/2018 00:59","26/05/2018 01:59","26/05/2018 02:59","26/05/2018 03:59","26/05/2018 04:59","26/05/2018 05:59","26/05/2018 06:59","26/05/2018 07:59","26/05/2018 08:59","26/05/2018 09:59","26/05/2018 10:59","26/05/2018 11:59","26/05/2018 12:59","26/05/2018 13:59","26/05/2018 14:59","26/05/2018 15:59","26/05/2018 16:59","26/05/2018 17:59","26/05/2018 18:59","26/05/2018 19:59","26/05/2018 20:59","26/05/2018 21:59","26/05/2018 22:59","26/05/2018 23:59","27/05/2018 00:59","27/05/2018 01:59","27/05/2018 02:59","27/05/2018 03:59","27/05/2018 04:59","27/05/2018 05:59","27/05/2018 06:59","27/05/2018 07:59","27/05/2018 08:59","27/05/2018 09:59","27/05/2018 10:59","27/05/2018 11:59","27/05/2018 12:59","27/05/2018 13:59","27/05/2018 14:59","27/05/2018 15:59","27/05/2018 16:59","27/05/2018 17:59","27/05/2018 18:59","27/05/2018 19:59","27/05/2018 20:59","27/05/2018 21:59","27/05/2018 22:59","27/05/2018 23:59","28/05/2018 00:59","28/05/2018 01:59","28/05/2018 02:59","28/05/2018 03:59","28/05/2018 04:59","28/05/2018 05:59","28/05/2018 06:59","28/05/2018 07:59","28/05/2018 08:59","28/05/2018 09:59","28/05/2018 10:59","28/05/2018 11:59","28/05/2018 12:59","28/05/2018 13:59","28/05/2018 14:59","28/05/2018 15:59","28/05/2018 16:59","28/05/2018 17:59","28/05/2018 18:59","28/05/2018 19:59","28/05/2018 20:59","28/05/2018 21:59","28/05/2018 22:59","28/05/2018 23:59","29/05/2018 00:59","29/05/2018 01:59","29/05/2018 02:59","29/05/2018 03:59","29/05/2018 04:59","29/05/2018 05:59","29/05/2018 06:59","29/05/2018 07:59","29/05/2018 08:59","29/05/2018 09:59","29/05/2018 10:59","29/05/2018 11:59","29/05/2018 12:59","29/05/2018 13:59","29/05/2018 14:59","29/05/2018 15:59","29/05/2018 16:59","29/05/2018 17:59","29/05/2018 18:59","29/05/2018 19:59","29/05/2018 20:59","29/05/2018 21:59","29/05/2018 22:59","29/05/2018 23:59","30/05/2018 00:59","30/05/2018 01:59","30/05/2018 02:59","30/05/2018 03:59","30/05/2018 04:59","30/05/2018 05:59","30/05/2018 06:59","30/05/2018 07:59","30/05/2018 08:59","30/05/2018 09:59","30/05/2018 10:59","30/05/2018 11:59","30/05/2018 12:59","30/05/2018 13:59","30/05/2018 14:59","30/05/2018 15:59","30/05/2018 16:59","30/05/2018 17:59","30/05/2018 18:59","30/05/2018 19:59","30/05/2018 20:59","30/05/2018 21:59","30/05/2018 22:59","30/05/2018 23:59","31/05/2018 00:59","31/05/2018 01:59","31/05/2018 02:59","31/05/2018 03:59","31/05/2018 04:59","31/05/2018 05:59","31/05/2018 06:59","31/05/2018 07:59","31/05/2018 08:59","31/05/2018 09:59","31/05/2018 10:59","31/05/2018 11:59","31/05/2018 12:59","31/05/2018 13:59","31/05/2018 14:59","31/05/2018 15:59","31/05/2018 16:59","31/05/2018 17:59","31/05/2018 18:59","31/05/2018 19:59","31/05/2018 20:59","31/05/2018 21:59","31/05/2018 22:59","31/05/2018 23:59"];
var timestampsLive = ["05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx"];
var pumpVibsLive = [525,526,527,545,527,550,517,515,519,522,534,532,531,527,550,523,526,511,528,520,510,532,525,525,526,527,545,527,546,550,545,510,541,540,511,538,543,542,549,528,541,532,525,537,516,537,540,527,547,512,539,539,536,539,548,532,520,547,525,525,522,520,525,544,519,519,525,537,531,519,533,517,532,524,510,517,517,527,511,534,537,534,526,538,516,546,513,522,531,534,513,534,549,516,521,510,541,541,533,541,535,546,518,510,518,547,524,527,514,542,533,546,523,519,546,548,533,520,548,530,533,524,523,543,518,515,520,549,526,526,531,523,528,513,528,545,513,520,513,540,513,521,535,522,527,512,550,529,533,536,533,527,523,528,540,549,529,535,515,516,512,530,529,510,518,539,538,547,539,546,523,525,516,510,522,542,536,528,546,538,548,541,520,540,526,545,513,523,546,525,527,518,521,526,521,538,541,529,518,550,517,515,519,522,534,532,531,527,550,523,526,511,528,520,510,532,525,525,526,527,545,527,546,550,545,510,541,540,511,538,543,542,549,528,541,532,525,537,516,537,540,527,547,512,539,539,536,539,548,532,529,535,515,516,512,530,529,510,518,539,538,547,539,546,523,525,516,540,549,529,535,515,516,512,530,529,510,518,539,538,547,539,546,523,525,516,510,522,542,536,528,546,538,548,541,520,540,526,545,513,523,546,525,527,518,521,526,521,538,541,529,518,550,517,515,519,522,534,532,531,527,550,523,526,511,528,520,510,532,525,525,526,527,545,527,546,550,545,510,541,540,511,538,543,542,549,528,541,532,525,537,516,537,540,527,547,512,539,539,536,539,548,532,520,547,525,525,522,520,525,544,519,519,525,537,531,519,527,550,523,526,511,528,520,510,532,525,525,526,527,545,527,546,550,545,510,541,540,511,538,543,542,549,526,527];
var pumpVibsHistorical = [547,593,508,551,523,597,524,544,546,548,533,548,563,539,568,548,573,599,546,573,552,532,554,540,595,589,556,543,585,546,525,543,593,525,500,600,595,532,575,523,514,518,594,551,501,575,598,546,519,540,575,527,569,542,543,518,531,566,560,527,544,535,558,545,589,533,594,573,517,536,542,575,594,584,596,554,566,562,600,553,562,520,511,582,507,510,582,569,574,551,564,538,548,514,544,508,525,543,502,523,532,588,594,501,573,572,555,510,596,578,538,574,590,568,572,592,509,515,537,597,513,573,583,528,537,562,552,536,593,586,543,504,581,565,595,505,544,509,587,574,530,501,580,510,595,511,571,507,514,534,574,503,538,560,532,552,553,556,544,532,582,587,531,570,503,545,509,591,597,527,507,596,512,511,591,566,567,577,525,585,565,546,559,593,541,540,527,562,536,575,589,599,585,575,581,572,540,507,505,560,522,551,532,531,581,584,535,544,597,595,550,575,599,528,557,567,512,540,585,510,526,597,550,539,590,579,509,564,532,529,547,516,511,510,576,531,578,599,580,548,575,593,562,531,559,559,533,531,542,591,500,497,493,492,489,485,484,483,478,476,475,472,470,469,466,465,464,463,462,460,459,456,454,449,448,446,445,442,440,436,434,432,429,427,424,423,419,417,415,414,412,409,407,405,404,394,391,390,388,387,386,384,382,380,379,378,376,375,374,373,372,370,369,367,365,364,363,361,360,352,351,350,349,347,346,345,343,336,334,329,328,327,324,323,322,321,320,319,318,315,314,313,310,309,308,307,304,303,301,300,265,238,200,231,290,230,263,276,220,255,234,287,277,257,275,264,272,258,291,222,247,245,205,225,235,203,299,294,278,248,202,273,246,206,236,253,292,217,266,204,214,244,252,289,227,224,208,296,283,270,262,268,237,233,281,226,218,249,250,260,300,280,229,295,241,256,261,282,254,213,259,242,297,293,209,285,212,288,284,223,221,207,279,239,298,243,216,232,269,219,201,228,240,210,267,274,211,271,215,286,237,233,281,226,218,249,250,260,300,280,229,295,241,256,261,282,254,213,259,242,297,293,209,285,212,288,284,223,221,207,279,239,298,243,216,232,269,219,201,228,240,210,267,274,211,271,215,286,241,256,261,282,254,213,259,242,297,293,209,285,212,288,284,223,238,239,240,250,255,259,264,265,266,271,274,279,281,282,285,296,297,298,306,307,312,317,333,334,340,358,361,367,368,375,387,390,394,402,405,411,414,427,441,443,446,450,451,455,456,459,461,473,474,475,480,481,485,487,492,495,503,504,506,515,516,523,528,536,540,547,549,557,561,568,599,579,575,525,527,550,516,560,574,594,564,504,500,551,502,587,586,521,536,572,591,554,525,566,553,562,539,539,513,559,540,586,555,525,594,589,576,597,500,531,586,579,551,519,522,583,513,534,503,596,536,505,589,563,587,519,582,508,502,538,547,569,580,558,556,559,579,581,559,562,555,517,579,544,520,515,528,590,523,508,562,570,560,596,543,529,500,539,537,500,556,595,534,543,552,561,595,506,544,556,519,524,545,521,543,519,587,545,557,550,599,514,553,574,521,595,594,531,533,528,509,566,513,561,515,559,521,596,561,598,505,568,597,560,536,546,571,531,565,561,551,510,525,561,510,561,506,600,573,564,552,526,532,598,544,600,592,507,510,512,540];

var pumpHistoricalChartIndex = 0;
var pumpLiveChartIndex = 0;

console.log(timestampsHistorical.length)
console.log(timestampsLive.length)
console.log(pumpVibsLive.length)
console.log(pumpVibsHistorical.length)


var pumpHistoricalChartConfig = {
        type: 'line',
        data: {
            labels: timestampsHistorical,
            datasets: [{ 
                data: pumpVibsHistorical,
                label: "Vibration",
                borderColor: "#8e5ea2",
                fill: false
              }
            ]
        },
        options: {
            legend: {
                position: 'top',
                labels: {
                    fontColor: 'white',
                    fontSize: 20
                }
            },
            title: {
                display: true,
                text: 'Heat Circulating Pump (historical data with an event)',
                     fontColor: 'white',
                     fontSize: 26
                },
            elements: { 
                point: { 
                    radius: 0,
                    hitRadius: 10, 
                    hoverRadius: 5,
                } 
            },
            scales: {
                xAxes: [{
                        display: true,
                        gridLines: {
                            display: false,
                            color:"#7B7D80"
                        },
                        ticks: {
                            fontSize: 16
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Timestamp',
                            fontSize: 16
                        }
                    }],
                yAxes: [{
                        display: true,
                        gridLines: {
                            display: true,
                            color:"#7B7D80"
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Vibration Count',
                            fontSize: 16
                        },
                        ticks: {
                            fontSize: 16
                        }
                    }]
            } 
        }
}

var pumpLiveChartConfig = {
        type: 'line',
        data: {
            labels: ["05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx","05/06/2018 xx:xx"],
            datasets: [{ 
                data: [543,543,512,512,527,519,542,543,548,547,540,513,514,514,547,521,514,529,524,535,540,529,519,525,534,539,540,542,549,530,539,546,528,547,527,523,528,540,549,529,535,515,516,512,530,529,510,518,539,538,547,539,546,523,525,516,510,522,542,536,528,546,538,548,541,520,540,526,545,513,523,546,525,527,518,521,526,521,538,541,529,518],
                label: "Vibration",
                borderColor: "#c45850",
                fill: false
              }
            ]
        },
        options: {
            legend: {
                position: 'top',
                labels: {
                    fontColor: 'white',
                    fontSize: 20
                }
            },
            title: {
                display: true,
                text: 'Heat Circulating Pump (live data)',
                     fontColor: 'white',
                     fontSize: 26
                },
            elements: { 
                 point: { 
                 radius: 0,
                 hitRadius: 10, 
                 hoverRadius: 5,
                } 
             },
             legend: {
                position: 'top',
                labels: {
                    fontColor: 'white',
                    fontSize: 20
                }
            },
            scales: {
                xAxes: [{
                        display: true,
                        gridLines: {
                            display: false,
                            color:"#7B7D80"
                        },
                        ticks: {
                            fontSize: 16
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Timestamp',
                            fontSize: 16
                        }
                    }],
                yAxes: [{
                        display: true,
                        gridLines: {
                            display: true,
                            color:"#7B7D80"
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Vibration Count',
                            fontSize: 16
                        },
                        ticks: {
                            fontSize: 16
                        }
                    }]
            }
        }
    }

window.onload = function() {
    var ctx = document.getElementById("pump1-vibration-chart").getContext("2d")
    window.pumpHistoricalChart = new Chart(ctx, pumpHistoricalChartConfig)

    var ctx = document.getElementById("pump2-vibration-chart").getContext("2d")
    window.pumpLiveChart = new Chart(ctx , pumpLiveChartConfig);
    pumpLiveTimer()
}

function pumpLiveTimer(){
    setTimeout(function(){
        if(pumpLiveChartIndex < pumpVibsLive.length-1){
            pumpLiveChartConfig.data.labels.push(timestampsLive[++pumpLiveChartIndex])
            pumpLiveChartConfig.data.datasets[0].data.push(pumpVibsLive[pumpLiveChartIndex])
            window.pumpLiveChart.update()
            pumpLiveTimer()
        }
    }, 2 * 1000);
}