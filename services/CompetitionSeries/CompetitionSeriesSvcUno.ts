///<reference path="../../node_modules/tsd-goalazo-models/models.d.ts"/>
///<reference path="../../typings/q/Q.d.ts"/>

import {Inject} from 'di-ts'
import ICompetitionSeries = goalazo.ICompetitionSeries;
import Promise = Q.Promise;
import {CompetitionSeriesRepoUno} from "../../repositiories/CompetitionSeries/CompetitionSeriesRepoUno";

@Inject
export class CompetitionSeriesSvcUno {

    constructor(protected competitionSeriesRepo: CompetitionSeriesRepoUno) {
    }

    getCompetitionSeries(limit: number): Promise<ICompetitionSeries[]> {

        return this.competitionSeriesRepo.getCompetitionSeries(limit);
    }
}
