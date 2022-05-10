<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http//www.w3.org/1999/XSL/Transform" version="2.0">

<xsl:template match="/">
    <html>
    <head>
        <style>
            table{
                border:1px solid green;
                border-collapse: collapse;
                width:50%;
            }
            td, th{
                border:1px solid green;
            }
            .card{
                width:15%;
                height:15vh;
                padding: 1rem;
                margin:1rem;
            }
        </style>
    </head>
        <body>
            <table border="1">
                <tr>
                    <th>name</th>
                    <th>tel</th>
                    <th>email</th>
                    <th>Data_Plan</th>
                </tr>

                <xsl:for-each select="customers_data/user">
                    <tr>
                        <td>
                            <xsl:value-of select="name"/>
                        </td>

                        <td>
                            <xsl:value-of select="tel"/>
                        </td>

                        <td>
                            <xsl:value-of select="email"/>
                        </td>

                        <td>
                            <xsl:value-of select="Data_Plan"/>
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>
